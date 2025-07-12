import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-primary"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-primary"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Premium Content Marketing Agency
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Dominate Your Market
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-brand-green-dark bg-clip-text text-transparent">
                With Content That Converts
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in delay-200">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              We don't just create content—we orchestrate campaigns that
              captivate audiences, build empires, and turn your brand into an
              unstoppable force.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              Start Your Domination
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              View Our Arsenal
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in delay-500 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-primary mr-2" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">500%</div>
              <div className="text-muted-foreground font-medium">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary mr-2" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">2M+</div>
              <div className="text-muted-foreground font-medium">Audience Reached</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-primary mr-2" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">48H</div>
              <div className="text-muted-foreground font-medium">Campaign Launch Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;