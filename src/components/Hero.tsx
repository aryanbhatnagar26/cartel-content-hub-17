
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, TrendingUp, Users, Clock } from 'lucide-react';

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
  backgroundImage?: string;
  heroImage?: string;
}

const Hero = () => {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('homeContent');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  if (!content) {
    return null;
  }

  const heroStyle = content.backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${content.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-green-light to-white" style={heroStyle}>
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-6 py-3 text-base font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Zap className="w-5 h-5 mr-2" />
              {content.badge.text}
            </Badge>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {content.headline.main}
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {content.headline.highlighted}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="group text-lg px-10 py-6 hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90">
              {content.buttons.primary}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 hover:scale-105 transition-all duration-300 border-primary/20 hover:bg-primary/5">
              {content.buttons.secondary}
            </Button>
          </div>

          {/* Hero Image */}
          {content.heroImage && (
            <div className="pt-12">
              <div className="relative max-w-2xl mx-auto">
                <img 
                  src={content.heroImage} 
                  alt="Hero" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl" />
              </div>
            </div>
          )}

          {/* Stats - Positioned at bottom */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">{content.stats.roi}</div>
              <div className="text-sm text-muted-foreground">ROI Increase</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">{content.stats.audience}</div>
              <div className="text-sm text-muted-foreground">Audience Reached</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">{content.stats.launchTime}</div>
              <div className="text-sm text-muted-foreground">Launch Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
