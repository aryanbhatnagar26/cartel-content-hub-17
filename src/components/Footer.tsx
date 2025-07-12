import { Button } from "@/components/ui/button";
import { Zap, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = {
    services: [
      "Brand Strategy",
      "Content Creation", 
      "Performance Marketing",
      "Video Production",
      "Email Marketing",
      "Digital Transformation"
    ],
    company: [
      "About Us",
      "Our Process",
      "Case Studies",
      "Careers",
      "Blog",
      "Contact"
    ],
    resources: [
      "Content Audit",
      "Strategy Toolkit",
      "Industry Reports",
      "Webinars",
      "Templates",
      "Newsletter"
    ]
  };

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Content Cartel</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We don't just create content—we orchestrate campaigns that build empires and establish market dominance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary p-2">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerSections.services.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerSections.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerSections.resources.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Content Cartel. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;