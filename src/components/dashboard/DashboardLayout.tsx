import { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutDashboard,
  Radio,
  Clock,
  Users,
  Zap,
  FileText,
  Settings,
  Search,
  Menu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
    { icon: Radio, label: "Monitor Stream", path: "/monitor-stream" },
    { icon: Clock, label: "Comment Timeline", path: "/comment-timeline" },
    { icon: Users, label: "Leads & Tracking", path: "/leads-pipeline" },
    { icon: Zap, label: "Automations", path: "/automations-builder" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-card border-r border-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-foreground">Leadequator</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors"
              activeClassName="bg-muted text-primary font-medium"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold">Lead Equator</h2>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Pilot
              </Badge>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search comments, leads, keywords..."
                  className="pl-10 bg-background"
                />
              </div>

              <Select defaultValue="utc">
                <SelectTrigger className="w-32 bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="pst">PST</SelectItem>
                  <SelectItem value="est">EST</SelectItem>
                  <SelectItem value="cet">CET</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
