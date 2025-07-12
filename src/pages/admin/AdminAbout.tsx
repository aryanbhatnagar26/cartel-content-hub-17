
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw } from 'lucide-react';

interface AboutContent {
  founderName: string;
  founderTitle: string;
  founderQuote: string;
  stats: {
    experience: string;
    brandsTransformed: string;
    revenueGenerated: string;
  };
  missionTitle: string;
  missionDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

const defaultContent: AboutContent = {
  founderName: "Akanshit Bhatnagar",
  founderTitle: "Founder & Chief Strategist",
  founderQuote: "I didn't start Content Cartel to be another marketing agency. I built it to be the weapon that transforms ambitious brands into market dominators. Every campaign we craft, every story we tell, is designed with one goal: total market supremacy.",
  stats: {
    experience: "5+",
    brandsTransformed: "140+",
    revenueGenerated: "₹50Cr+"
  },
  missionTitle: "Our Mission",
  missionDescription: "We believe every brand has the potential to dominate its market. Our mission is to unlock that potential through strategic content marketing, innovative campaigns, and relentless execution that transforms businesses into industry leaders.",
  ctaTitle: "Ready to Transform Your Brand?",
  ctaDescription: "Let's build your content empire together and establish your dominance in the market.",
  ctaButtonText: "Start Your Transformation"
};

const AdminAbout = () => {
  const [content, setContent] = useState<AboutContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('aboutContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('aboutContent', JSON.stringify(content));
      toast({
        title: "Success",
        description: "About content saved successfully",
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">About Section Editor</h1>
          <p className="text-muted-foreground">Manage your about section content</p>
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

      {/* Founder Section */}
      <Card>
        <CardHeader>
          <CardTitle>Founder Information</CardTitle>
          <CardDescription>Edit founder details and quote</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="founderName">Founder Name</Label>
              <Input
                id="founderName"
                value={content.founderName}
                onChange={(e) => setContent(prev => ({ ...prev, founderName: e.target.value }))}
                placeholder="Akanshit Bhatnagar"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="founderTitle">Title</Label>
              <Input
                id="founderTitle"
                value={content.founderTitle}
                onChange={(e) => setContent(prev => ({ ...prev, founderTitle: e.target.value }))}
                placeholder="Founder & Chief Strategist"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="founderQuote">Founder Quote</Label>
            <Textarea
              id="founderQuote"
              value={content.founderQuote}
              onChange={(e) => setContent(prev => ({ ...prev, founderQuote: e.target.value }))}
              placeholder="I didn't start Content Cartel to be another marketing agency..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <Card>
        <CardHeader>
          <CardTitle>Founder Stats</CardTitle>
          <CardDescription>Key achievements and numbers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Years Experience</Label>
              <Input
                value={content.stats.experience}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  stats: { ...prev.stats, experience: e.target.value }
                }))}
                placeholder="5+"
              />
            </div>
            <div className="space-y-2">
              <Label>Brands Transformed</Label>
              <Input
                value={content.stats.brandsTransformed}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  stats: { ...prev.stats, brandsTransformed: e.target.value }
                }))}
                placeholder="140+"
              />
            </div>
            <div className="space-y-2">
              <Label>Revenue Generated</Label>
              <Input
                value={content.stats.revenueGenerated}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  stats: { ...prev.stats, revenueGenerated: e.target.value }
                }))}
                placeholder="₹50Cr+"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission Section */}
      <Card>
        <CardHeader>
          <CardTitle>Mission Statement</CardTitle>
          <CardDescription>Company mission and values</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="missionTitle">Mission Title</Label>
            <Input
              id="missionTitle"
              value={content.missionTitle}
              onChange={(e) => setContent(prev => ({ ...prev, missionTitle: e.target.value }))}
              placeholder="Our Mission"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="missionDescription">Mission Description</Label>
            <Textarea
              id="missionDescription"
              value={content.missionDescription}
              onChange={(e) => setContent(prev => ({ ...prev, missionDescription: e.target.value }))}
              placeholder="We believe every brand has the potential..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card>
        <CardHeader>
          <CardTitle>Call to Action</CardTitle>
          <CardDescription>Bottom section CTA content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ctaTitle">CTA Title</Label>
            <Input
              id="ctaTitle"
              value={content.ctaTitle}
              onChange={(e) => setContent(prev => ({ ...prev, ctaTitle: e.target.value }))}
              placeholder="Ready to Transform Your Brand?"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ctaDescription">CTA Description</Label>
            <Textarea
              id="ctaDescription"
              value={content.ctaDescription}
              onChange={(e) => setContent(prev => ({ ...prev, ctaDescription: e.target.value }))}
              placeholder="Let's build your content empire together..."
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ctaButtonText">Button Text</Label>
            <Input
              id="ctaButtonText"
              value={content.ctaButtonText}
              onChange={(e) => setContent(prev => ({ ...prev, ctaButtonText: e.target.value }))}
              placeholder="Start Your Transformation"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAbout;
