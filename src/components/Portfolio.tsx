import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empires We've
            <br />
            <span className="text-primary">Built & Conquered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From startups to industry giants, witness the transformation of brands into
            market-dominating forces.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-card border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-64 lg:h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <TrendingUp className="w-12 h-12 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">Dashboard Preview</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-primary/10 text-primary">
                    SaaS Startup
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">TechStart Unicorn</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Transformed a struggling SaaS startup into a $100M valuation through strategic 
                    content marketing and brand positioning.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-5 h-5 text-primary mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-primary">850%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-primary mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-primary">2.3M</div>
                      <div className="text-sm text-muted-foreground">Users Acquired</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="w-5 h-5 text-primary mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-primary">$100M</div>
                      <div className="text-sm text-muted-foreground">Valuation</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Content Strategy</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Growth Marketing</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Brand Development</Badge>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Notable Clients
          </Badge>
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">Trusted by</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            From startups to enterprises, these prestigious brands trust us to elevate their content
            strategy and market presence.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">140+</div>
              <div className="text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">₹50Cr</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">Client Rating</div>
            </div>
          </div>

          {/* Client Logos Placeholder */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {["NUCLEAR", "VIBECRAFT", "Kidult India", "PVR CINEMAS"].map((client) => (
              <div 
                key={client}
                className="w-32 h-16 bg-card border border-border rounded-lg flex items-center justify-center shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <span className="font-bold text-sm text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Join The
          </Badge>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            These brands didn't just grow—they dominated. Ready to write your own success story and
            join the ranks of market leaders?
          </h3>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;