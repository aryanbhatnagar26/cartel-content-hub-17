
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw } from 'lucide-react';

interface ContactContent {
  heading: string;
  subheading: string;
  description: string;
  formTitle: string;
  contactInfo: {
    email: string;
    emailDescription: string;
    phone: string;
    phoneDescription: string;
    location: string;
    locationDescription: string;
  };
  responseGuarantee: {
    title: string;
    description: string;
  };
}

const defaultContent: ContactContent = {
  heading: "Let's Build Your Content Empire",
  subheading: "Every empire starts with a conversation. Tell us your vision, and we'll show you how to make it reality.",
  description: "Ready to transform your brand into a market-dominating force? Our strategists are standing by to discuss your vision and create a roadmap to content supremacy.",
  formTitle: "Start Your Transformation",
  contactInfo: {
    email: "hello@contentcartel.in",
    emailDescription: "For new business inquiries",
    phone: "+91 7452859955",
    phoneDescription: "Mon-Fri 9AM-6PM IST",
    location: "Agra, India",
    locationDescription: "Where empires are built"
  },
  responseGuarantee: {
    title: "24-Hour Response Guarantee",
    description: "We respond to all serious inquiries within 24 hours. For urgent projects, call us directly and we'll prioritize your empire-building mission."
  }
};

const AdminContact = () => {
  const [content, setContent] = useState<ContactContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('contactContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('contactContent', JSON.stringify(content));
      toast({
        title: "Success",
        description: "Contact content saved successfully",
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
          <h1 className="text-3xl font-bold">Contact Section Editor</h1>
          <p className="text-muted-foreground">Manage your contact information and content</p>
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
          <CardDescription>Main heading and description for the contact section</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heading">Main Heading</Label>
            <Input
              id="heading"
              value={content.heading}
              onChange={(e) => setContent(prev => ({ ...prev, heading: e.target.value }))}
              placeholder="Let's Build Your Content Empire"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subheading">Subheading</Label>
            <Textarea
              id="subheading"
              value={content.subheading}
              onChange={(e) => setContent(prev => ({ ...prev, subheading: e.target.value }))}
              placeholder="Every empire starts with a conversation..."
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={content.description}
              onChange={(e) => setContent(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Ready to transform your brand..."
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="formTitle">Contact Form Title</Label>
            <Input
              id="formTitle"
              value={content.formTitle}
              onChange={(e) => setContent(prev => ({ ...prev, formTitle: e.target.value }))}
              placeholder="Start Your Transformation"
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Email, phone, and location details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                value={content.contactInfo.email}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, email: e.target.value }
                }))}
                placeholder="hello@contentcartel.in"
              />
            </div>
            <div className="space-y-2">
              <Label>Email Description</Label>
              <Input
                value={content.contactInfo.emailDescription}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, emailDescription: e.target.value }
                }))}
                placeholder="For new business inquiries"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                value={content.contactInfo.phone}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, phone: e.target.value }
                }))}
                placeholder="+91 7452859955"
              />
            </div>
            <div className="space-y-2">
              <Label>Phone Description</Label>
              <Input
                value={content.contactInfo.phoneDescription}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, phoneDescription: e.target.value }
                }))}
                placeholder="Mon-Fri 9AM-6PM IST"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                value={content.contactInfo.location}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, location: e.target.value }
                }))}
                placeholder="Agra, India"
              />
            </div>
            <div className="space-y-2">
              <Label>Location Description</Label>
              <Input
                value={content.contactInfo.locationDescription}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, locationDescription: e.target.value }
                }))}
                placeholder="Where empires are built"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response Guarantee */}
      <Card>
        <CardHeader>
          <CardTitle>Response Guarantee</CardTitle>
          <CardDescription>Service promise and response time</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guaranteeTitle">Guarantee Title</Label>
            <Input
              id="guaranteeTitle"
              value={content.responseGuarantee.title}
              onChange={(e) => setContent(prev => ({
                ...prev,
                responseGuarantee: { ...prev.responseGuarantee, title: e.target.value }
              }))}
              placeholder="24-Hour Response Guarantee"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guaranteeDescription">Guarantee Description</Label>
            <Textarea
              id="guaranteeDescription"
              value={content.responseGuarantee.description}
              onChange={(e) => setContent(prev => ({
                ...prev,
                responseGuarantee: { ...prev.responseGuarantee, description: e.target.value }
              }))}
              placeholder="We respond to all serious inquiries..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContact;
