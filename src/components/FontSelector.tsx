
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Type, RotateCcw } from 'lucide-react';

interface FontConfig {
  family: string;
  size: number;
  weight: string;
  lineHeight: number;
  letterSpacing: number;
}

interface FontSelectorProps {
  value: FontConfig;
  onChange: (value: FontConfig) => void;
  label?: string;
}

const googleFonts = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Source Sans Pro',
  'Raleway',
  'Poppins',
  'Nunito',
  'Playfair Display',
  'Merriweather',
  'Lora',
  'PT Sans',
  'Ubuntu',
  'Fira Sans'
];

const fontWeights = [
  { value: '300', label: 'Light' },
  { value: '400', label: 'Normal' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'Semi Bold' },
  { value: '700', label: 'Bold' },
  { value: '800', label: 'Extra Bold' }
];

const FontSelector = ({ value, onChange, label = "Font Settings" }: FontSelectorProps) => {
  const [previewText, setPreviewText] = useState("The quick brown fox jumps over the lazy dog");

  useEffect(() => {
    // Load Google Font dynamically
    if (!document.querySelector(`link[href*="${value.family}"]`)) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${value.family.replace(' ', '+')}:wght@300;400;500;600;700;800&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, [value.family]);

  const handleReset = () => {
    onChange({
      family: 'Inter',
      size: 16,
      weight: '400',
      lineHeight: 1.5,
      letterSpacing: 0
    });
  };

  const previewStyle = {
    fontFamily: value.family,
    fontSize: `${value.size}px`,
    fontWeight: value.weight,
    lineHeight: value.lineHeight,
    letterSpacing: `${value.letterSpacing}px`
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Type className="w-5 h-5 mr-2" />
            {label}
          </CardTitle>
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Font Family */}
        <div className="space-y-2">
          <Label>Font Family</Label>
          <Select value={value.family} onValueChange={(family) => onChange({ ...value, family })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {googleFonts.map((font) => (
                <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Font Size */}
          <div className="space-y-2">
            <Label>Size: {value.size}px</Label>
            <Slider
              value={[value.size]}
              onValueChange={([size]) => onChange({ ...value, size })}
              min={12}
              max={72}
              step={1}
            />
          </div>

          {/* Font Weight */}
          <div className="space-y-2">
            <Label>Weight</Label>
            <Select value={value.weight} onValueChange={(weight) => onChange({ ...value, weight })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontWeights.map((weight) => (
                  <SelectItem key={weight.value} value={weight.value}>
                    {weight.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Line Height */}
          <div className="space-y-2">
            <Label>Line Height: {value.lineHeight}</Label>
            <Slider
              value={[value.lineHeight]}
              onValueChange={([lineHeight]) => onChange({ ...value, lineHeight })}
              min={1}
              max={3}
              step={0.1}
            />
          </div>

          {/* Letter Spacing */}
          <div className="space-y-2">
            <Label>Letter Spacing: {value.letterSpacing}px</Label>
            <Slider
              value={[value.letterSpacing]}
              onValueChange={([letterSpacing]) => onChange({ ...value, letterSpacing })}
              min={-2}
              max={5}
              step={0.1}
            />
          </div>
        </div>

        {/* Preview Text Input */}
        <div className="space-y-2">
          <Label>Preview Text</Label>
          <Input
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            placeholder="Enter text to preview"
          />
        </div>

        {/* Font Preview */}
        <div className="border rounded-lg p-6 bg-muted/30">
          <p style={previewStyle}>
            {previewText}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FontSelector;
