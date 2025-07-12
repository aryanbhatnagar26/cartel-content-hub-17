
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface SectionItem {
  id: string;
  name: string;
  component: string;
  enabled: boolean;
}

const defaultSections: SectionItem[] = [
  { id: 'hero', name: 'Hero Section', component: 'Hero', enabled: true },
  { id: 'services', name: 'Services', component: 'Services', enabled: true },
  { id: 'portfolio', name: 'Portfolio', component: 'Portfolio', enabled: true },
  { id: 'about', name: 'About', component: 'About', enabled: true },
  { id: 'blog', name: 'Blog', component: 'Blog', enabled: true },
  { id: 'contact', name: 'Contact', component: 'Contact', enabled: true }
];

const Index = () => {
  const [sections, setSections] = useState<SectionItem[]>(defaultSections);

  useEffect(() => {
    const savedSections = localStorage.getItem('sectionOrder');
    if (savedSections) {
      setSections(JSON.parse(savedSections));
    }
  }, []);

  const renderSection = (section: SectionItem) => {
    if (!section.enabled) return null;
    
    switch (section.component) {
      case 'Hero':
        return <Hero key={section.id} />;
      case 'Services':
        return <Services key={section.id} />;
      case 'Portfolio':
        return <Portfolio key={section.id} />;
      case 'About':
        return <About key={section.id} />;
      case 'Blog':
        return <Blog key={section.id} />;
      case 'Contact':
        return <Contact key={section.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {sections.map(renderSection)}
      <Footer />
    </div>
  );
};

export default Index;
