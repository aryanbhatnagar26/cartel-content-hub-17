
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    // Load blog posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    } else {
      // Set default blog posts
      const defaultPosts: BlogPost[] = [
        {
          id: "1",
          title: "The Future of Content Marketing: AI-Driven Strategies",
          excerpt: "Discover how artificial intelligence is revolutionizing content marketing and what it means for your brand's growth strategy.",
          content: "Full article content here...",
          author: "Alex Morgan",
          publishDate: "2024-01-15",
          readTime: "5 min read",
          category: "Strategy",
          tags: ["AI", "Content Marketing", "Strategy"],
          featured: true,
          image: "/placeholder.svg"
        },
        {
          id: "2",
          title: "Building Brand Authority Through Authentic Storytelling",
          excerpt: "Learn how to craft compelling brand narratives that resonate with your audience and build lasting trust.",
          content: "Full article content here...",
          author: "Sarah Chen",
          publishDate: "2024-01-10",
          readTime: "7 min read",
          category: "Branding",
          tags: ["Branding", "Storytelling", "Authority"],
          featured: false,
          image: "/placeholder.svg"
        },
        {
          id: "3",
          title: "Performance Marketing Metrics That Actually Matter",
          excerpt: "Cut through the noise and focus on the KPIs that drive real business growth in digital marketing.",
          content: "Full article content here...",
          author: "Mike Rodriguez",
          publishDate: "2024-01-05",
          readTime: "6 min read",
          category: "Analytics",
          tags: ["Metrics", "Performance", "ROI"],
          featured: false,
          image: "/placeholder.svg"
        }
      ];
      setBlogPosts(defaultPosts);
      localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
    }
  }, []);

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with our latest thoughts on content marketing, 
            brand strategy, and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-card transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-muted"></div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <CardTitle className="text-2xl mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="w-fit group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-card transition-shadow duration-300 group">
              <div className="aspect-video bg-muted"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {regularPosts.length > 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20">
          <Card className="bg-primary text-primary-foreground p-8 text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Stay Updated</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Get the latest insights on content marketing and brand strategy delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-foreground bg-background"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
