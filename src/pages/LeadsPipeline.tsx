import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink, Download } from "lucide-react";

const LeadsPipeline = () => {
  const leads = [
    {
      id: "LD-1847",
      name: "Sarah Johnson",
      company: "TechCorp Inc",
      platform: "LinkedIn",
      intent: 92,
      status: "Contacted",
      value: "$45K",
      source: "PR automation discussion",
      timestamp: "2024-04-15 14:23",
    },
    {
      id: "LD-1846",
      name: "Mike Chen",
      company: "Growth Labs",
      platform: "Reddit",
      intent: 88,
      status: "Qualified",
      value: "$32K",
      source: "B2B lead gen thread",
      timestamp: "2024-04-15 13:45",
    },
    {
      id: "LD-1845",
      name: "Emma Wilson",
      company: "Wilson Agency",
      platform: "X",
      intent: 85,
      status: "Negotiating",
      value: "$78K",
      source: "Competitor complaint",
      timestamp: "2024-04-15 12:10",
    },
    {
      id: "LD-1844",
      name: "David Martinez",
      company: "DataFlow SaaS",
      platform: "Quora",
      intent: 78,
      status: "Demo Scheduled",
      value: "$54K",
      source: "Purchase intent question",
      timestamp: "2024-04-15 10:32",
    },
    {
      id: "LD-1843",
      name: "Lisa Anderson",
      company: "Marketing Hub",
      platform: "LinkedIn",
      intent: 75,
      status: "New",
      value: "$28K",
      source: "Social selling inquiry",
      timestamp: "2024-04-15 09:15",
    },
    {
      id: "LD-1842",
      name: "James Taylor",
      company: "Innovate Agency",
      platform: "YouTube",
      intent: 65,
      status: "Contacted",
      value: "$19K",
      source: "Video comment - integration question",
      timestamp: "2024-04-14 16:48",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-500/20 text-blue-500";
      case "Contacted":
        return "bg-yellow-500/20 text-yellow-500";
      case "Qualified":
        return "bg-purple-500/20 text-purple-500";
      case "Demo Scheduled":
        return "bg-green-500/20 text-green-500";
      case "Negotiating":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getIntentColor = (intent: number) => {
    if (intent >= 85) return "bg-primary text-primary-foreground";
    if (intent >= 70) return "bg-chart-2 text-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">Leads Pipeline</h1>
            <p className="text-muted-foreground">
              Qualified leads from social conversations with CRM sync
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Sync to CRM
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Leads", value: "287", subtext: "This month" },
            { label: "Pipeline Value", value: "$1.2M", subtext: "+34% vs last month" },
            { label: "Avg Deal Size", value: "$42K", subtext: "Median: $35K" },
            { label: "Win Rate", value: "23%", subtext: "Conv-to-close" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold mb-1 text-primary">
                {stat.value}
              </div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.subtext}</div>
            </Card>
          ))}
        </div>

        {/* Leads Table */}
        <Card className="bg-card border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="font-bold">Lead ID</TableHead>
                  <TableHead className="font-bold">Contact</TableHead>
                  <TableHead className="font-bold">Platform</TableHead>
                  <TableHead className="font-bold">Intent</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Value</TableHead>
                  <TableHead className="font-bold">Source</TableHead>
                  <TableHead className="font-bold">Created</TableHead>
                  <TableHead className="font-bold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead, index) => (
                  <TableRow
                    key={lead.id}
                    className="border-border hover:bg-muted/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <TableCell className="font-mono text-primary">
                      {lead.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-semibold">{lead.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {lead.company}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {lead.platform}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getIntentColor(lead.intent)}>
                        {lead.intent}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{lead.value}</TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-48 truncate">
                      {lead.source}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {lead.timestamp}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* CRM Sync Status */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-1">CRM Sync Active</h3>
              <p className="text-sm text-muted-foreground">
                Last synced: 2 minutes ago • Syncing to Salesforce
              </p>
            </div>
            <Button variant="secondary">Configure Sync</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeadsPipeline;
