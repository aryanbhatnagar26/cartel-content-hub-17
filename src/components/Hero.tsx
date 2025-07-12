
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
    return null; // or a loading spinner
  }

  const heroStyle = content.backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${content.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={heroStyle}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <Zap className="w-4 h-4 mr-2" />
                {content.badge.text}
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {content.headline.main}
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {content.headline.highlighted}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {content.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
                {content.buttons.primary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                {content.buttons.secondary}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{content.stats.roi}</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{content.stats.audience}</div>
                <div className="text-sm text-muted-foreground">Audience Reached</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Clock className="w-6 h-6 text-primary mr-2" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{content.stats.launchTime}</div>
                <div className="text-sm text-muted-foreground">Launch Time</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative hidden lg:block">
            {content.heroImage ? (
              <div className="relative">
                <img 
                  src={content.heroImage} 
                  alt="Hero" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
              </div>
            ) : (
              <div className="relative">
                {/* Abstract geometric shapes representing content strategy */}
                <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-primary/30 rounded-lg rotate-12 animate-float" />
                  <div className="absolute top-20 right-16 w-16 h-16 bg-secondary/40 rounded-full animate-float delay-500" />
                  <div className="absolute bottom-20 left-16 w-24 h-24 bg-accent/30 rounded-lg -rotate-12 animate-float delay-1000" />
                  <div className="absolute bottom-10 right-10 w-18 h-18 bg-primary/25 rounded-full animate-float delay-1500" />
                  
                  {/* Central focus element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl animate-pulse flex items-center justify-center">
                      <Zap className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
