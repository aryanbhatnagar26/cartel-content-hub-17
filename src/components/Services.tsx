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

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description: "Forge an unbreakable brand identity that commands respect and drives loyalty.",
      features: ["Brand Positioning", "Competitive Analysis", "Message Architecture"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Premium content that doesn't just engage—it converts prospects into devoted customers.",
      features: ["Blog Articles", "Social Media", "Video Scripts"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      description: "Data-driven campaigns that turn every dollar invested into exponential returns.",
      features: ["Paid Advertising", "SEO Optimization", "Analytics & Reporting"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic content that stops scrollers in their tracks and builds brand empires.",
      features: ["Promotional Videos", "Social Content", "Brand Documentaries"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Mail,
      title: "Email Domination",
      description: "Email sequences that nurture leads and create an army of loyal customers.",
      features: ["Welcome Series", "Nurture Campaigns", "Conversion Funnels"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Digital Ecosystem",
      description: "Complete digital transformation that positions you as the undisputed industry leader.",
      features: ["Website Design", "E-commerce", "Digital Strategy"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-accent text-accent-foreground">
            Our Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Services That
            <br />
            <span className="text-primary">Dominate Markets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every weapon in our arsenal is designed to obliterate competition and establish
            your brand as the ultimate authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
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
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
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