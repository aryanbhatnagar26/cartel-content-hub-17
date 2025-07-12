
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw } from 'lucide-react';

interface HomeContent {
  badge: {
    text: string;
    icon: string;
  };
  headline: {
    main: string;
    highlighted: string;
  };
  subtitle: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  stats: {
    roi: string;
    audience: string;
    launchTime: string;
  };
}

const defaultContent: HomeContent = {
  badge: {
    text: "Premium Content Marketing Agency",
    icon: "Zap"
  },
  headline: {
    main: "Dominate Your Market",
    highlighted: "With Content That Converts"
  },
  subtitle: "We don't just create content—we orchestrate campaigns that captivate audiences, build empires, and turn your brand into an unstoppable force.",
  buttons: {
    primary: "Start Your Domination",
    secondary: "View Our Arsenal"
  },
  stats: {
    roi: "500%",
    audience: "2M+",
    launchTime: "48H"
  }
};

const AdminHome = () => {
  const [content, setContent] = useState<HomeContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('homeContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('homeContent', JSON.stringify(content));
      toast({
        title: "Success",
        description: "Home section content saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save content",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setContent(defaultContent);
    toast({
      title: "Reset Complete",
      description: "Content restored to default values",
    });
  };

  const updateContent = (path: string, value: string) => {
    setContent(prev => {
      const newContent = { ...prev };
      const keys = path.split('.');
      let current: any = newContent;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      
      return newContent;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Home Section Editor</h1>
          <p className="text-muted-foreground">Edit your homepage hero content</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="w-4 h-4 mr-2" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Badge Section */}
        <Card>
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>The premium badge at the top of the hero</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="badge-text">Badge Text</Label>
              <Input
                id="badge-text"
                value={content.badge.text}
                onChange={(e) => updateContent('badge.text', e.target.value)}
                placeholder="Premium Content Marketing Agency"
              />
            </div>
          </CardContent>
        </Card>

        {/* Headlines */}
        <Card>
          <CardHeader>
            <CardTitle>Headlines</CardTitle>
            <CardDescription>Main hero headlines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="headline-main">Main Headline</Label>
              <Input
                id="headline-main"
                value={content.headline.main}
                onChange={(e) => updateContent('headline.main', e.target.value)}
                placeholder="Dominate Your Market"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="headline-highlighted">Highlighted Text</Label>
              <Input
                id="headline-highlighted"
                value={content.headline.highlighted}
                onChange={(e) => updateContent('headline.highlighted', e.target.value)}
                placeholder="With Content That Converts"
              />
            </div>
          </CardContent>
        </Card>

        {/* Subtitle */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Subtitle</CardTitle>
            <CardDescription>The descriptive text below the headline</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={content.subtitle}
              onChange={(e) => updateContent('subtitle', e.target.value)}
              placeholder="We don't just create content—we orchestrate campaigns..."
              rows={3}
            />
          </CardContent>
        </Card>

        {/* Call-to-Action Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>CTA Buttons</CardTitle>
            <CardDescription>Primary and secondary button text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="btn-primary">Primary Button</Label>
              <Input
                id="btn-primary"
                value={content.buttons.primary}
                onChange={(e) => updateContent('buttons.primary', e.target.value)}
                placeholder="Start Your Domination"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="btn-secondary">Secondary Button</Label>
              <Input
                id="btn-secondary"
                value={content.buttons.secondary}
                onChange={(e) => updateContent('buttons.secondary', e.target.value)}
                placeholder="View Our Arsenal"
              />
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>Hero section stats</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stat-roi">ROI Increase</Label>
              <Input
                id="stat-roi"
                value={content.stats.roi}
                onChange={(e) => updateContent('stats.roi', e.target.value)}
                placeholder="500%"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stat-audience">Audience Reached</Label>
              <Input
                id="stat-audience"
                value={content.stats.audience}
                onChange={(e) => updateContent('stats.audience', e.target.value)}
                placeholder="2M+"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stat-launch">Launch Time</Label>
              <Input
                id="stat-launch"
                value={content.stats.launchTime}
                onChange={(e) => updateContent('stats.launchTime', e.target.value)}
                placeholder="48H"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHome;
