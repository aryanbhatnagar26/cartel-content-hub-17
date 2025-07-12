import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectDetails: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to discuss your empire-building mission.",
    });
    setFormData({ fullName: "", email: "", projectDetails: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Ready to Dominate?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Your
            <br />
            <span className="text-primary">Content Empire</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every empire starts with a conversation. Tell us your vision, and we'll show you
            how to make it reality.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Start Your Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder="Tell us about your goals, challenges, and how we can help you dominate your market..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                >
                  Launch My Empire
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Ready to transform your brand into a market-dominating force? Our strategists
                  are standing by to discuss your vision and create a roadmap to content
                  supremacy.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-primary font-medium">hello@contentcartel.in</p>
                      <p className="text-sm text-muted-foreground">For new business inquiries</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-primary font-medium">+91 7452859955</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                      <p className="text-primary font-medium">Agra, India</p>
                      <p className="text-sm text-muted-foreground">Where empires are built</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Guarantee */}
            <Card className="shadow-card border-0 bg-primary/5 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">24-Hour Response Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      We respond to all serious inquiries within 24 hours. For urgent projects,
                      call us directly and we'll prioritize your empire-building mission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;