
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw, Plus, Trash2 } from 'lucide-react';

interface PortfolioContent {
  heading: string;
  subheading: string;
  description: string;
  featuredCase: {
    title: string;
    category: string;
    description: string;
    revenueGrowth: string;
    usersAcquired: string;
    valuation: string;
  };
  stats: {
    clientsServed: string;
    successRate: string;
    revenueGenerated: string;
    clientRating: string;
  };
  clients: string[];
}

const defaultContent: PortfolioContent = {
  heading: "Empires We've Built & Conquered",
  subheading: "From startups to industry giants, witness the transformation of brands into market-dominating forces.",
  description: "These brands didn't just grow—they dominated. Ready to write your own success story and join the ranks of market leaders?",
  featuredCase: {
    title: "TechStart Unicorn",
    category: "SaaS Startup",
    description: "Transformed a struggling SaaS startup into a $100M valuation through strategic content marketing and brand positioning.",
    revenueGrowth: "850%",
    usersAcquired: "2.3M",
    valuation: "$100M"
  },
  stats: {
    clientsServed: "140+",
    successRate: "85%",
    revenueGenerated: "₹50Cr",
    clientRating: "4.9★"
  },
  clients: ["NUCLEAR", "VIBECRAFT", "Kidult India", "PVR CINEMAS"]
};

const AdminPortfolio = () => {
  const [content, setContent] = useState<PortfolioContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('portfolioContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('portfolioContent', JSON.stringify(content));
      toast({
        title: "Success",
        description: "Portfolio content saved successfully",
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

  const addClient = () => {
    setContent(prev => ({
      ...prev,
      clients: [...prev.clients, "New Client"]
    }));
  };

  const removeClient = (index: number) => {
    setContent(prev => ({
      ...prev,
      clients: prev.clients.filter((_, i) => i !== index)
    }));
  };

  const updateClient = (index: number, value: string) => {
    setContent(prev => ({
      ...prev,
      clients: prev.clients.map((client, i) => i === index ? value : client)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Portfolio Editor</h1>
          <p className="text-muted-foreground">Manage your portfolio showcase</p>
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

      {/* Section Headers */}
      <Card>
        <CardHeader>
          <CardTitle>Section Headers</CardTitle>
          <CardDescription>Main heading and description for the portfolio section</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heading">Main Heading</Label>
            <Input
              id="heading"
              value={content.heading}
              onChange={(e) => setContent(prev => ({ ...prev, heading: e.target.value }))}
              placeholder="Empires We've Built & Conquered"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subheading">Subheading</Label>
            <Textarea
              id="subheading"
              value={content.subheading}
              onChange={(e) => setContent(prev => ({ ...prev, subheading: e.target.value }))}
              placeholder="From startups to industry giants..."
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={content.description}
              onChange={(e) => setContent(prev => ({ ...prev, description: e.target.value }))}
              placeholder="These brands didn't just grow..."
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Featured Case Study */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Case Study</CardTitle>
          <CardDescription>Showcase your best success story</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Case Title</Label>
              <Input
                value={content.featuredCase.title}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  featuredCase: { ...prev.featuredCase, title: e.target.value }
                }))}
                placeholder="TechStart Unicorn"
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                value={content.featuredCase.category}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  featuredCase: { ...prev.featuredCase, category: e.target.value }
                }))}
                placeholder="SaaS Startup"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={content.featuredCase.description}
              onChange={(e) => setContent(prev => ({
                ...prev,
                featuredCase: { ...prev.featuredCase, description: e.target.value }
              }))}
              placeholder="Transformed a struggling SaaS startup..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Revenue Growth</Label>
              <Input
                value={content.featuredCase.revenueGrowth}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  featuredCase: { ...prev.featuredCase, revenueGrowth: e.target.value }
                }))}
                placeholder="850%"
              />
            </div>
            <div className="space-y-2">
              <Label>Users Acquired</Label>
              <Input
                value={content.featuredCase.usersAcquired}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  featuredCase: { ...prev.featuredCase, usersAcquired: e.target.value }
                }))}
                placeholder="2.3M"
              />
            </div>
            <div className="space-y-2">
              <Label>Valuation</Label>
              <Input
                value={content.featuredCase.valuation}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  featuredCase: { ...prev.featuredCase, valuation: e.target.value }
                }))}
                placeholder="$100M"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Company Stats</CardTitle>
          <CardDescription>Key performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Clients Served</Label>
              <Input
                value={content.stats.clientsServed}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  stats: { ...prev.stats, clientsServed: e.target.value }
                }))}
                placeholder="140+"
              />
            </div>
            <div className="space-y-2">
              <Label>Success Rate</Label>
              <Input
                value={content.stats.successRate}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  stats: { ...prev.stats, successRate: e.target.value }
                }))}
                placeholder="85%"
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
                placeholder="₹50Cr"
              />
            </div>
            <div className="space-y-2">
              <Label>Client Rating</Label>
              <Input
                value={content.stats.clientRating}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  stats: { ...prev.stats, clientRating: e.target.value }
                }))}
                placeholder="4.9★"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Logos */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Client Logos</CardTitle>
              <CardDescription>Notable client names</CardDescription>
            </div>
            <Button onClick={addClient}>
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {content.clients.map((client, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={client}
                  onChange={(e) => updateClient(index, e.target.value)}
                  placeholder="Client Name"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeClient(index)}
                  disabled={content.clients.length === 1}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPortfolio;
