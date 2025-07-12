
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save, RotateCcw, Plus, Trash2 } from 'lucide-react';
import ImageUpload from '@/components/ImageUpload';
import ColorPicker from '@/components/ColorPicker';

interface FooterContent {
  companyName: string;
  description: string;
  sections: {
    services: string[];
    company: string[];
    resources: string[];
  };
  socialLinks: {
    twitter: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  legal: {
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
  };
  styling: {
    backgroundColor: string;
    textColor: string;
    linkColor: string;
    backgroundImage?: string;
  };
}

const defaultContent: FooterContent = {
  companyName: "Content Cartel",
  description: "We don't just create content—we orchestrate campaigns that build empires and establish market dominance.",
  sections: {
    services: [
      "Brand Strategy",
      "Content Creation", 
      "Performance Marketing",
      "Video Production",
      "Email Marketing",
      "Digital Transformation"
    ],
    company: [
      "About Us",
      "Our Process",
      "Case Studies",
      "Careers",
      "Blog",
      "Contact"
    ],
    resources: [
      "Content Audit",
      "Strategy Toolkit",
      "Industry Reports",
      "Webinars",
      "Templates",
      "Newsletter"
    ]
  },
  socialLinks: {
    twitter: "https://twitter.com/contentcartel",
    linkedin: "https://linkedin.com/company/contentcartel",
    instagram: "https://instagram.com/contentcartel",
    email: "hello@contentcartel.in"
  },
  contactInfo: {
    email: "hello@contentcartel.in",
    phone: "+91 7452859955",
    address: "Agra, India"
  },
  legal: {
    copyright: "© 2024 Content Cartel. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy"
  },
  styling: {
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
    linkColor: "#4ade80"
  }
};

const AdminFooter = () => {
  const [content, setContent] = useState<FooterContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('footerContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('footerContent', JSON.stringify(content));
      toast({
        title: "Success",
        description: "Footer content saved successfully",
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

  const addMenuItem = (section: keyof typeof content.sections) => {
    setContent(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: [...prev.sections[section], "New Item"]
      }
    }));
  };

  const removeMenuItem = (section: keyof typeof content.sections, index: number) => {
    setContent(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: prev.sections[section].filter((_, i) => i !== index)
      }
    }));
  };

  const updateMenuItem = (section: keyof typeof content.sections, index: number, value: string) => {
    setContent(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: prev.sections[section].map((item, i) => i === index ? value : item)
      }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Footer Editor</h1>
          <p className="text-muted-foreground">Manage your website footer content and styling</p>
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

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>Basic company details displayed in footer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={content.companyName}
              onChange={(e) => setContent(prev => ({ ...prev, companyName: e.target.value }))}
              placeholder="Content Cartel"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={content.description}
              onChange={(e) => setContent(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Company description"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Footer Sections */}
      <Card>
        <CardHeader>
          <CardTitle>Footer Menu Sections</CardTitle>
          <CardDescription>Organize your footer navigation links</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {(Object.keys(content.sections) as Array<keyof typeof content.sections>).map((sectionKey) => (
            <div key={sectionKey} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold capitalize">{sectionKey}</h4>
                <Button onClick={() => addMenuItem(sectionKey)} size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Item
                </Button>
              </div>
              <div className="space-y-2">
                {content.sections[sectionKey].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={item}
                      onChange={(e) => updateMenuItem(sectionKey, index, e.target.value)}
                      placeholder="Menu item"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeMenuItem(sectionKey, index)}
                      disabled={content.sections[sectionKey].length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Contact details displayed in footer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={content.contactInfo.email}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, email: e.target.value }
                }))}
                placeholder="hello@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                value={content.contactInfo.phone}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, phone: e.target.value }
                }))}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Input
                value={content.contactInfo.address}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, address: e.target.value }
                }))}
                placeholder="City, Country"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle>Social Media Links</CardTitle>
          <CardDescription>Social media profiles and contact links</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Twitter URL</Label>
              <Input
                value={content.socialLinks.twitter}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, twitter: e.target.value }
                }))}
                placeholder="https://twitter.com/username"
              />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn URL</Label>
              <Input
                value={content.socialLinks.linkedin}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, linkedin: e.target.value }
                }))}
                placeholder="https://linkedin.com/company/name"
              />
            </div>
            <div className="space-y-2">
              <Label>Instagram URL</Label>
              <Input
                value={content.socialLinks.instagram}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, instagram: e.target.value }
                }))}
                placeholder="https://instagram.com/username"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={content.socialLinks.email}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, email: e.target.value }
                }))}
                placeholder="hello@company.com"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Legal Information</CardTitle>
          <CardDescription>Copyright and legal page links</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Copyright Text</Label>
            <Input
              value={content.legal.copyright}
              onChange={(e) => setContent(prev => ({
                ...prev,
                legal: { ...prev.legal, copyright: e.target.value }
              }))}
              placeholder="© 2024 Company Name. All rights reserved."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Privacy Policy</Label>
              <Input
                value={content.legal.privacyPolicy}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  legal: { ...prev.legal, privacyPolicy: e.target.value }
                }))}
                placeholder="Privacy Policy"
              />
            </div>
            <div className="space-y-2">
              <Label>Terms of Service</Label>
              <Input
                value={content.legal.termsOfService}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  legal: { ...prev.legal, termsOfService: e.target.value }
                }))}
                placeholder="Terms of Service"
              />
            </div>
            <div className="space-y-2">
              <Label>Cookie Policy</Label>
              <Input
                value={content.legal.cookiePolicy}
                onChange={(e) => setContent(prev => ({
                  ...prev,
                  legal: { ...prev.legal, cookiePolicy: e.target.value }
                }))}
                placeholder="Cookie Policy"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Styling Options */}
      <Card>
        <CardHeader>
          <CardTitle>Footer Styling</CardTitle>
          <CardDescription>Customize footer appearance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ImageUpload
            label="Background Image"
            value={content.styling.backgroundImage}
            onChange={(value) => setContent(prev => ({
              ...prev,
              styling: { ...prev.styling, backgroundImage: value }
            }))}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ColorPicker
              label="Background Color"
              value={content.styling.backgroundColor}
              onChange={(value) => setContent(prev => ({
                ...prev,
                styling: { ...prev.styling, backgroundColor: value }
              }))}
            />
            <ColorPicker
              label="Text Color"
              value={content.styling.textColor}
              onChange={(value) => setContent(prev => ({
                ...prev,
                styling: { ...prev.styling, textColor: value }
              }))}
            />
            <ColorPicker
              label="Link Color"
              value={content.styling.linkColor}
              onChange={(value) => setContent(prev => ({
                ...prev,
                styling: { ...prev.styling, linkColor: value }
              }))}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminFooter;
