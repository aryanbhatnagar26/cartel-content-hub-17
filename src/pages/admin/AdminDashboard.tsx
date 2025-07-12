
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Settings, 
  FileText, 
  Briefcase, 
  User, 
  Phone, 
  Users,
  Edit3,
  BarChart3,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [stats, setStats] = useState({
    blogPosts: 0,
    lastUpdated: null as string | null
  });

  useEffect(() => {
    // Load stats from localStorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const siteContent = localStorage.getItem('siteContent');
    
    setStats({
      blogPosts: blogPosts.length,
      lastUpdated: siteContent ? new Date().toLocaleDateString() : null
    });
  }, []);

  const adminSections = [
    {
      title: 'Home Section',
      description: 'Edit hero content, headlines, and statistics',
      icon: Home,
      href: '/admin/home',
      color: 'bg-blue-500'
    },
    {
      title: 'Services',
      description: 'Manage service offerings and features',
      icon: Settings,
      href: '/admin/services',
      color: 'bg-green-500'
    },
    {
      title: 'Portfolio',
      description: 'Update case studies and client work',
      icon: Briefcase,
      href: '/admin/portfolio',
      color: 'bg-purple-500'
    },
    {
      title: 'About',
      description: 'Edit company info and team details',
      icon: User,
      href: '/admin/about',
      color: 'bg-orange-500'
    },
    {
      title: 'Contact',
      description: 'Update contact information and form',
      icon: Phone,
      href: '/admin/contact',
      color: 'bg-red-500'
    },
    {
      title: 'Blog',
      description: 'Manage blog posts and content',
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your website content</p>
        </div>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogPosts}</div>
            <p className="text-xs text-muted-foreground">
              Published posts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Sections</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              Editable sections
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.lastUpdated || 'Never'}
            </div>
            <p className="text-xs text-muted-foreground">
              Content changes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminSections.map((section) => (
          <Link key={section.title} to={section.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${section.color} text-white`}>
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {section.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">
                    <Edit3 className="h-3 w-3 mr-1" />
                    Edit Content
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild className="justify-start">
              <Link to="/admin/blog">
                <FileText className="h-4 w-4 mr-2" />
                Create New Blog Post
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link to="/admin/home">
                <Home className="h-4 w-4 mr-2" />
                Update Homepage
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link to="/admin/services">
                <Settings className="h-4 w-4 mr-2" />
                Manage Services
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link to="/">
                <Users className="h-4 w-4 mr-2" />
                View Live Site
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
