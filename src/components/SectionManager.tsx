
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GripVertical, ArrowUp, ArrowDown, RotateCcw, Eye, EyeOff } from 'lucide-react';

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

const SectionManager = ({ sections, onSectionsChange }: SectionManagerProps) => {
  const { toast } = useToast();

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newSections.length) {
      [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
      onSectionsChange(newSections);
      
      toast({
        title: "Section moved",
        description: `${newSections[targetIndex].name} moved ${direction}`,
      });
    }
  };

  const toggleSection = (index: number) => {
    const newSections = [...sections];
    newSections[index].enabled = !newSections[index].enabled;
    onSectionsChange(newSections);
    
    toast({
      title: newSections[index].enabled ? "Section enabled" : "Section disabled",
      description: `${newSections[index].name} is now ${newSections[index].enabled ? 'visible' : 'hidden'}`,
    });
  };

  const resetToDefault = () => {
    const defaultSections: SectionItem[] = [
      { id: 'hero', name: 'Hero Section', component: 'Hero', enabled: true },
      { id: 'services', name: 'Services', component: 'Services', enabled: true },
      { id: 'portfolio', name: 'Portfolio', component: 'Portfolio', enabled: true },
      { id: 'about', name: 'About', component: 'About', enabled: true },
      { id: 'blog', name: 'Blog', component: 'Blog', enabled: true },
      { id: 'contact', name: 'Contact', component: 'Contact', enabled: true }
    ];
    
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
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex items-center justify-between p-4 border-2 rounded-lg transition-all duration-200 ${
                section.enabled 
                  ? 'bg-card border-border hover:border-primary/50' 
                  : 'bg-muted/50 border-muted opacity-60 hover:opacity-80'
              }`}
            >
              <div className="flex items-center space-x-4">
                <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab hover:text-primary transition-colors" />
                <div className="flex items-center space-x-3">
                  {section.enabled ? (
                    <Eye className="w-5 h-5 text-green-600" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  )}
                  <div>
                    <div className="font-semibold text-foreground">{section.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {section.enabled ? 'Visible on homepage' : 'Hidden from homepage'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={section.enabled ? "destructive" : "default"}
                  size="sm"
                  onClick={() => toggleSection(index)}
                  className="min-w-20"
                >
                  {section.enabled ? 'Hide' : 'Show'}
                </Button>
                
                <div className="flex space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => moveSection(index, 'up')}
                    disabled={index === 0}
                    className="p-2"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => moveSection(index, 'down')}
                    disabled={index === sections.length - 1}
                    className="p-2"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Use the arrows to reorder sections, or hide/show them as needed. 
            Changes are automatically saved and will reflect on your homepage.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionManager;
