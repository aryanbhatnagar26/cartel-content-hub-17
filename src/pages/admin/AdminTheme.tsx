
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw, Download, Upload } from 'lucide-react';
import ColorPicker from '@/components/ColorPicker';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  card: string;
  border: string;
  destructive: string;
}

const defaultTheme: ThemeColors = {
  primary: '#0ea5e9',
  secondary: '#64748b',
  accent: '#f1f5f9',
  background: '#ffffff',
  foreground: '#0f172a',
  muted: '#f8fafc',
  card: '#ffffff',
  border: '#e2e8f0',
  destructive: '#ef4444'
};

const AdminTheme = () => {
  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('themeColors');
    if (saved) {
      setTheme(JSON.parse(saved));
    }
    loadTheme();
  }, []);

  const loadTheme = () => {
    const saved = localStorage.getItem('themeColors');
    if (saved) {
      const colors = JSON.parse(saved);
      applyThemeToDocument(colors);
    }
  };

  const applyThemeToDocument = (colors: ThemeColors) => {
    const root = document.documentElement;
    
    // Convert hex to HSL for CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      const hsl = hexToHsl(value);
      root.style.setProperty(`--${key}`, hsl);
    });
  };

  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('themeColors', JSON.stringify(theme));
      applyThemeToDocument(theme);
      toast({
        title: "Success",
        description: "Theme colors saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save theme colors",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setTheme(defaultTheme);
    applyThemeToDocument(defaultTheme);
    toast({
      title: "Reset Complete",
      description: "Theme restored to default colors",
    });
  };

  const exportTheme = () => {
    const dataStr = JSON.stringify(theme, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'theme-colors.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setTheme(imported);
          applyThemeToDocument(imported);
          toast({
            title: "Success",
            description: "Theme imported successfully",
          });
        } catch (error) {
          toast({
            title: "Error",
            description: "Invalid theme file",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const updateColor = (key: keyof ThemeColors, value: string) => {
    const newTheme = { ...theme, [key]: value };
    setTheme(newTheme);
    applyThemeToDocument(newTheme);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Theme Editor</h1>
          <p className="text-muted-foreground">Customize your website colors and theme</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button variant="outline" onClick={exportTheme}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <label>
            <Button variant="outline" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Import
              </span>
            </Button>
            <input
              type="file"
              accept=".json"
              onChange={importTheme}
              className="hidden"
            />
          </label>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="w-4 h-4 mr-2" />
            {isLoading ? "Saving..." : "Save Theme"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Primary Colors</CardTitle>
            <CardDescription>Main brand colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ColorPicker
              label="Primary"
              value={theme.primary}
              onChange={(value) => updateColor('primary', value)}
            />
            <ColorPicker
              label="Secondary"
              value={theme.secondary}
              onChange={(value) => updateColor('secondary', value)}
            />
            <ColorPicker
              label="Accent"
              value={theme.accent}
              onChange={(value) => updateColor('accent', value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Background Colors</CardTitle>
            <CardDescription>Page and component backgrounds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ColorPicker
              label="Background"
              value={theme.background}
              onChange={(value) => updateColor('background', value)}
            />
            <ColorPicker
              label="Card Background"
              value={theme.card}
              onChange={(value) => updateColor('card', value)}
            />
            <ColorPicker
              label="Muted Background"
              value={theme.muted}
              onChange={(value) => updateColor('muted', value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Text & Border Colors</CardTitle>
            <CardDescription>Typography and UI elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ColorPicker
              label="Text Color"
              value={theme.foreground}
              onChange={(value) => updateColor('foreground', value)}
            />
            <ColorPicker
              label="Border Color"
              value={theme.border}
              onChange={(value) => updateColor('border', value)}
            />
            <ColorPicker
              label="Destructive"
              value={theme.destructive}
              onChange={(value) => updateColor('destructive', value)}
            />
          </CardContent>
        </Card>
      </div>

      {/* Live Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
          <CardDescription>See how your theme looks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="flex gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Sample Card</CardTitle>
                <CardDescription>This is how cards will look with your theme</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Your content will appear with these colors and styling.</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTheme;
