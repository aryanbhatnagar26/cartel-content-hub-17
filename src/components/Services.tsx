
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  PenTool, 
  BarChart3, 
  Video, 
  Mail, 
  Globe,
  ArrowRight 
} from "lucide-react";

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

const Services = () => {
  const [content, setContent] = useState<ServicesContent>(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem('servicesContent');
    if (saved) {
      try {
        const parsedContent = JSON.parse(saved);
        setContent(parsedContent);
      } catch (error) {
        console.error('Error parsing services content:', error);
        setContent(defaultContent);
      }
    }
  }, []);

  const getIconForService = (index: number) => {
    const icons = [Megaphone, PenTool, BarChart3, Video, Mail, Globe];
    return icons[index % icons.length];
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-accent text-accent-foreground">
            Our Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {content.heading.split(' ').slice(0, -2).join(' ')}
            <br />
            <span className="text-primary">{content.heading.split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.services.map((service, index) => {
            const IconComponent = getIconForService(index);
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Build Your Content Empire?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can transform your brand into an unstoppable force that dominates your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
