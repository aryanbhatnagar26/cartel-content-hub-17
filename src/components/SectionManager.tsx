
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GripVertical, ArrowUp, ArrowDown, Save, RotateCcw } from 'lucide-react';

interface SectionItem {
  id: string;
  name: string;
  component: string;
  enabled: boolean;
}

interface SectionManagerProps {
  sections: SectionItem[];
  onSectionsChange: (sections: SectionItem[]) => void;
}

const defaultSections: SectionItem[] = [
  { id: 'hero', name: 'Hero Section', component: 'Hero', enabled: true },
  { id: 'services', name: 'Services', component: 'Services', enabled: true },
  { id: 'portfolio', name: 'Portfolio', component: 'Portfolio', enabled: true },
  { id: 'about', name: 'About', component: 'About', enabled: true },
  { id: 'blog', name: 'Blog', component: 'Blog', enabled: true },
  { id: 'contact', name: 'Contact', component: 'Contact', enabled: true }
];

const SectionManager = ({ sections, onSectionsChange }: SectionManagerProps) => {
  const { toast } = useToast();

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newSections.length) {
      [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
      onSectionsChange(newSections);
    }
  };

  const toggleSection = (index: number) => {
    const newSections = [...sections];
    newSections[index].enabled = !newSections[index].enabled;
    onSectionsChange(newSections);
  };

  const resetToDefault = () => {
    onSectionsChange(defaultSections);
    toast({
      title: "Reset Complete",
      description: "Section order restored to default",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <GripVertical className="w-5 h-5 mr-2" />
              Section Manager
            </CardTitle>
            <CardDescription>
              Reorder and enable/disable sections on your homepage
            </CardDescription>
          </div>
          <Button variant="outline" onClick={resetToDefault}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Order
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${
                section.enabled ? 'bg-card' : 'bg-muted/50 opacity-60'
              }`}
            >
              <div className="flex items-center space-x-3">
                <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                <div>
                  <div className="font-medium">{section.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {section.enabled ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection(index)}
                  className={section.enabled ? 'text-destructive' : 'text-primary'}
                >
                  {section.enabled ? 'Disable' : 'Enable'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => moveSection(index, 'up')}
                  disabled={index === 0}
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => moveSection(index, 'down')}
                  disabled={index === sections.length - 1}
                >
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionManager;
