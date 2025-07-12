import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Linkedin, Twitter } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built from passion, driven by results, and fueled by an obsession to help brands
            dominate their markets.
          </p>
        </div>

        {/* Founder Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-card border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Founder Image */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 h-96 lg:h-full flex items-center justify-center relative">
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full"></div>
                  </div>
                  <div className="w-64 h-80 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto mb-4"></div>
                      <div className="text-xl font-bold text-primary">Founder Photo</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2">Akanshit Bhatnagar</h3>
                  <Badge className="mb-6 bg-primary/10 text-primary">
                    Founder & Chief Strategist
                  </Badge>

                  {/* Quote */}
                  <div className="mb-8">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                      "I didn't start Content Cartel to be another marketing agency. I built it
                      to be the weapon that transforms ambitious brands into market
                      dominators. Every campaign we craft, every story we tell, is designed
                      with one goal: total market supremacy."
                    </blockquote>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">140+</div>
                      <div className="text-sm text-muted-foreground">Brands Transformed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">₹50Cr+</div>
                      <div className="text-sm text-muted-foreground">Revenue Generated</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We believe every brand has the potential to dominate its market. Our mission is to unlock
            that potential through strategic content marketing, innovative campaigns, and relentless
            execution that transforms businesses into industry leaders.
          </p>
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h4 className="text-xl font-bold text-white mb-4">Ready to Transform Your Brand?</h4>
            <p className="text-white/90 mb-6">
              Let's build your content empire together and establish your dominance in the market.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;