import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Settings, 
  FileText, 
  Briefcase, 
  User, 
  Phone,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
  Zap,
  Palette
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: 'Home Section',
      href: '/admin/home',
      icon: Home,
    },
    {
      name: 'Services',
      href: '/admin/services',
      icon: Settings,
    },
    {
      name: 'Portfolio',
      href: '/admin/portfolio',
      icon: Briefcase,
    },
    {
      name: 'About',
      href: '/admin/about',
      icon: User,
    },
    {
      name: 'Contact',
      href: '/admin/contact',
      icon: Phone,
    },
    {
      name: 'Blog',
      href: '/admin/blog',
      icon: FileText,
    },
    {
      name: 'Footer',
      href: '/admin/footer',
      icon: Palette,
    },
    {
      name: 'Theme',
      href: '/admin/theme',
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-background border-r shadow-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Zap className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-6 left-6 right-6">
            <Button variant="outline" onClick={logout} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 border-r bg-background px-6 py-4">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-primary mr-2" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Button variant="outline" onClick={logout} className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-background px-4 py-4 shadow-sm border-b lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex flex-1 justify-between items-center">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                ← Back to Website
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Content Cartel Admin
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8 px-4 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
