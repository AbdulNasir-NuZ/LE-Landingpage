import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KPICard } from "@/components/dashboard/KPICard";
import {
  Activity,
  TrendingUp,
  Users,
  MessageSquare,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardOverview = () => {
  const kpiData = [
    { icon: MessageSquare, label: "New Comments (24h)", value: "342", change: "+23%", trend: "up" as const },
    { icon: AlertCircle, label: "High-Intent (≥70)", value: "127", change: "+34%", trend: "up" as const },
    { icon: ThumbsUp, label: "Auto Replies Sent (24h)", value: "89", change: "+18%", trend: "up" as const },
    { icon: Users, label: "Link Clicks (7d)", value: "456", change: "+12%", trend: "up" as const },
    { icon: TrendingUp, label: "Engagement→Lead %", value: "26.1%", change: "+2.1%", trend: "up" as const },
    { icon: Activity, label: "Avg Reply Time", value: "8min", change: "-15%", trend: "up" as const },
  ];

  const engagementData = [
    { date: "Jan", engagements: 2400, leads: 180 },
    { date: "Feb", engagements: 2800, leads: 210 },
    { date: "Mar", engagements: 3100, leads: 245 },
    { date: "Apr", engagements: 3421, leads: 287 },
  ];

  const sentimentData = [
    { name: "Positive", value: 65, color: "hsl(var(--primary))" },
    { name: "Neutral", value: 25, color: "hsl(var(--muted))" },
    { name: "Negative", value: 10, color: "hsl(var(--destructive))" },
  ];

  const platformData = [
    { platform: "LinkedIn", threads: 4200, leads: 120 },
    { platform: "Reddit", threads: 3800, leads: 95 },
    { platform: "X (Twitter)", threads: 2400, leads: 42 },
    { platform: "Quora", threads: 1800, leads: 23 },
    { platform: "YouTube", threads: 647, leads: 7 },
  ];

  return (
    <div className="p-8 space-y-8 bg-background">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Real-time analytics and performance metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32 bg-card">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7d</SelectItem>
              <SelectItem value="30d">Last 30d</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary text-primary-foreground">
            <Activity className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            icon={kpi.icon}
            label={kpi.label}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-8">
          {/* Engagement Trend */}
          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-bold mb-6">Engagement & Lead Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="engagements"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  name="Engagements"
                />
                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  name="Leads"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Sentiment Distribution */}
          <Card className="p-6 bg-card border-border">
            <h3 className="text-xl font-bold mb-6">Sentiment Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
      </div>

      {/* Platform Performance & Intent Distribution */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-bold mb-6">Platform Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="platform" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              />
              <Legend />
              <Bar dataKey="threads" fill="hsl(var(--primary))" name="Threads" />
              <Bar dataKey="leads" fill="hsl(var(--chart-2))" name="Leads" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Intent Distribution */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-bold mb-6">Intent Score Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { range: "0-20", count: 45 },
                { range: "21-40", count: 78 },
                { range: "41-60", count: 112 },
                { range: "61-80", count: 89 },
                { range: "81-100", count: 127 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-card border-border">
          <h3 className="text-xl font-bold mb-6">Recent High-Intent Leads</h3>
          <div className="space-y-4">
            {[
              {
                user: "Sarah Johnson",
                platform: "LinkedIn",
                intent: 92,
                message: "Looking for a PR automation tool that actually works...",
                time: "2 min ago",
              },
              {
                user: "Mike Chen",
                platform: "Reddit",
                intent: 88,
                message: "Anyone tried lead gen without paid ads?",
                time: "15 min ago",
              },
              {
                user: "Emma Wilson",
                platform: "X",
                intent: 85,
                message: "Competitor's support is terrible. Need alternatives.",
                time: "32 min ago",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Badge
                    variant="default"
                    className="bg-primary text-primary-foreground"
                  >
                    {activity.intent}
                  </Badge>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{activity.user}</span>
                    <span className="text-xs text-muted-foreground">
                      via {activity.platform}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {activity.message}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
                <Button size="sm" variant="secondary">
                  Engage
                </Button>
              </div>
            ))}
          </div>
        </Card>
    </div>
  );
};

export default DashboardOverview;
