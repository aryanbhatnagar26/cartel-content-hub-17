
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, RotateCcw } from 'lucide-react';

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  presets?: string[];
}

const ColorPicker = ({ value, onChange, label = "Color", presets = [] }: ColorPickerProps) => {
  const [showPresets, setShowPresets] = useState(false);

  const defaultPresets = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#FFC0CB', '#A52A2A', '#808080', '#000080', '#008000'
  ];

  const allPresets = presets.length > 0 ? presets : defaultPresets;

  const handleHexChange = (hexValue: string) => {
    if (hexValue.startsWith('#') && hexValue.length === 7) {
      onChange(hexValue);
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      <div className="flex gap-2 items-center">
        <div 
          className="w-12 h-10 rounded border-2 border-border cursor-pointer"
          style={{ backgroundColor: value }}
          onClick={() => setShowPresets(!showPresets)}
        />
        
        <Input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-16 h-10 p-1 cursor-pointer"
        />
        
        <Input
          type="text"
          value={value}
          onChange={(e) => handleHexChange(e.target.value)}
          placeholder="#000000"
          className="flex-1"
        />
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowPresets(!showPresets)}
        >
          <Palette className="w-4 h-4" />
        </Button>
      </div>

      {showPresets && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Color Presets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {allPresets.map((preset) => (
                <button
                  key={preset}
                  className="w-8 h-8 rounded border-2 border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: preset }}
                  onClick={() => onChange(preset)}
                  title={preset}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ColorPicker;
