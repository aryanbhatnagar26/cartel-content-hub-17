
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';

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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background Pattern - matching screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100/50 to-green-200/30">
        {/* Geometric shapes in background */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-green-300/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-200/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-green-300/20 rounded-full blur-lg"></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200/10 to-green-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-green-100/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="px-6 py-3 text-base font-medium bg-green-100 text-green-700 border-green-200 hover:bg-green-200 transition-colors rounded-full">
              <Zap className="w-5 h-5 mr-2" />
              {content.badge.text}
            </Badge>
          </div>

          {/* Main Headlines - matching screenshot typography */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-gray-900 block mb-2">
                {content.headline.main}
              </span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                {content.headline.highlighted}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              {content.subtitle}
            </p>
          </div>

          {/* CTA Buttons - matching screenshot style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="group text-lg px-12 py-6 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              {content.buttons.primary}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-semibold transition-all duration-300"
            >
              {content.buttons.secondary}
            </Button>
          </div>

          {/* Statistics Section - matching screenshot layout */}
          <div className="pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-green-600">
                  {content.stats.roi}
                </div>
                <div className="text-gray-600 font-medium">
                  Average ROI Increase
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-green-600">
                  {content.stats.audience}
                </div>
                <div className="text-gray-600 font-medium">
                  Audience Reached
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-green-600">
                  {content.stats.launchTime}
                </div>
                <div className="text-gray-600 font-medium">
                  Campaign Launch Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
