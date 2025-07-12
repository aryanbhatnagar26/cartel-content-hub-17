
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Trophy, Target } from "lucide-react";

interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

const defaultContent: HeroContent = {
  badge: "Content Marketing Domination",
  headline: "Content That Commands Attention",
  subheadline: "Converts Like Crazy",
  description: "We don't create content—we engineer influence. Our battle-tested strategies turn your brand into the undisputed authority that competitors fear and customers crave.",
  primaryButton: "Start Dominating Now",
  secondaryButton: "Watch Our Process",
  stats: [
    { number: "500%", label: "Average ROI Increase" },
    { number: "2M+", label: "Content Views Generated" },
    { number: "150+", label: "Brands Transformed" }
  ]
};

const Hero = () => {
  const [content, setContent] = useState<HeroContent>(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem('heroContent');
    if (saved) {
      try {
        const parsedContent = JSON.parse(saved);
        setContent(parsedContent);
      } catch (error) {
        console.error('Error parsing hero content:', error);
        setContent(defaultContent);
      }
    }
  }, []);

  const getIconForStat = (index: number) => {
    const icons = [Target, Users, Trophy];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6 text-primary" />;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 px-4 py-2 bg-gradient-primary text-white hover:bg-gradient-primary/90 text-sm font-medium">
            {content.badge}
          </Badge>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {content.headline}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              {content.subheadline}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white font-semibold px-8 py-3">
              {content.primaryButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-semibold px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              {content.secondaryButton}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  {getIconForStat(index)}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
