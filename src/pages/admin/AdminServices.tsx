
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw, Plus, Trash2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

interface ServicesContent {
  heading: string;
  subheading: string;
  services: ServiceItem[];
}

const defaultContent: ServicesContent = {
  heading: "Services That Command Attention",
  subheading: "We don't follow trends—we create them. Our strategic arsenal is designed to make your competitors question their life choices.",
  services: [
    {
      id: "1",
      title: "Content Strategy & Planning",
      description: "We craft content strategies that don't just engage—they convert browsers into buyers and followers into fanatics.",
      features: ["Audience Research & Personas", "Content Calendar Development", "Competitive Analysis", "ROI-Focused Planning"],
      gradient: "from-blue-400 to-purple-600"
    },
    {
      id: "2", 
      title: "Social Media Domination",
      description: "Turn your social media into a lead-generating machine that works 24/7 to grow your empire.",
      features: ["Platform-Specific Content", "Community Management", "Influencer Partnerships", "Viral Campaign Creation"],
      gradient: "from-purple-400 to-pink-600"
    }
  ]
};

const AdminServices = () => {
  const [content, setContent] = useState<ServicesContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('servicesContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('servicesContent', JSON.stringify(content));
      toast({
        title: "Success",
        description: "Services content saved successfully",
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

  const addService = () => {
    const newService: ServiceItem = {
      id: Date.now().toString(),
      title: "New Service",
      description: "Service description",
      features: ["Feature 1", "Feature 2"],
      gradient: "from-blue-400 to-purple-600"
    };
    setContent(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const removeService = (id: string) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.filter(service => service.id !== id)
    }));
  };

  const updateService = (id: string, field: keyof ServiceItem, value: any) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    }));
  };

  const updateFeature = (serviceId: string, featureIndex: number, value: string) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === serviceId 
          ? {
              ...service,
              features: service.features.map((feature, index) => 
                index === featureIndex ? value : feature
              )
            }
          : service
      )
    }));
  };

  const addFeature = (serviceId: string) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === serviceId 
          ? { ...service, features: [...service.features, "New Feature"] }
          : service
      )
    }));
  };

  const removeFeature = (serviceId: string, featureIndex: number) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === serviceId 
          ? {
              ...service,
              features: service.features.filter((_, index) => index !== featureIndex)
            }
          : service
      )
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Services Editor</h1>
          <p className="text-muted-foreground">Manage your service offerings</p>
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
          <CardDescription>Main heading and subheading for the services section</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heading">Main Heading</Label>
            <Input
              id="heading"
              value={content.heading}
              onChange={(e) => setContent(prev => ({ ...prev, heading: e.target.value }))}
              placeholder="Services That Command Attention"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subheading">Subheading</Label>
            <Textarea
              id="subheading"
              value={content.subheading}
              onChange={(e) => setContent(prev => ({ ...prev, subheading: e.target.value }))}
              placeholder="We don't follow trends—we create them..."
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Services */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Services</h2>
        <Button onClick={addService}>
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>

      <div className="space-y-6">
        {content.services.map((service, index) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Service {index + 1}</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeService(service.id)}
                  disabled={content.services.length === 1}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Service Title</Label>
                  <Input
                    value={service.title}
                    onChange={(e) => updateService(service.id, 'title', e.target.value)}
                    placeholder="Service Title"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gradient Class</Label>
                  <Input
                    value={service.gradient}
                    onChange={(e) => updateService(service.id, 'gradient', e.target.value)}
                    placeholder="from-blue-400 to-purple-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={service.description}
                  onChange={(e) => updateService(service.id, 'description', e.target.value)}
                  placeholder="Service description"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Features</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addFeature(service.id)}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Feature
                  </Button>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Input
                        value={feature}
                        onChange={(e) => updateFeature(service.id, featureIndex, e.target.value)}
                        placeholder="Feature name"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFeature(service.id, featureIndex)}
                        disabled={service.features.length === 1}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
