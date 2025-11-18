import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Sparkles, ExternalLink } from "lucide-react";
import { FilterPanel } from "@/components/dashboard/FilterPanel";
import { DetailPane } from "@/components/dashboard/DetailPane";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MonitorStream = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedComment, setSelectedComment] = useState<any>(null);
  const threads = [
    {
      id: 1,
      platform: "LinkedIn",
      user: "Sarah Johnson",
      avatar: "SJ",
      intent: 92,
      sentiment: "Positive",
      timestamp: "2 minutes ago",
      content:
        "We're looking for a PR automation tool that can monitor LinkedIn conversations and generate contextual replies. Our current agency is too slow and expensive. Any recommendations?",
      engagement: { likes: 24, comments: 8 },
      keywords: ["PR automation", "LinkedIn", "agency alternative"],
    },
    {
      id: 2,
      platform: "Reddit",
      user: "growth_hacker_mike",
      avatar: "GM",
      intent: 88,
      sentiment: "Neutral",
      timestamp: "15 minutes ago",
      content:
        "Has anyone successfully generated B2B leads without paid ads? We've been trying organic social but it's hit or miss. Looking for tools that can scale this process.",
      engagement: { likes: 156, comments: 42 },
      keywords: ["B2B leads", "organic social", "lead gen tools"],
    },
    {
      id: 3,
      platform: "X (Twitter)",
      user: "Emma Wilson",
      avatar: "EW",
      intent: 85,
      sentiment: "Negative",
      timestamp: "32 minutes ago",
      content:
        "@CompetitorBrand support has been terrible. Waited 3 days for a response and their AI replies don't even understand my question. Time to switch providers.",
      engagement: { likes: 89, comments: 15 },
      keywords: ["competitor mention", "poor support", "switching"],
    },
    {
      id: 4,
      platform: "Quora",
      user: "David Martinez",
      avatar: "DM",
      intent: 78,
      sentiment: "Positive",
      timestamp: "1 hour ago",
      content:
        "What's the best way to track purchase intent in social conversations? I run a B2B SaaS and want to identify prospects who are actively looking for solutions like ours.",
      engagement: { likes: 12, comments: 5 },
      keywords: ["purchase intent", "B2B SaaS", "social listening"],
    },
    {
      id: 5,
      platform: "YouTube",
      user: "Tech Review Channel",
      avatar: "TR",
      intent: 65,
      sentiment: "Neutral",
      timestamp: "3 hours ago",
      content:
        "Comment: This is exactly what we need for our agency. Does it integrate with HubSpot? How accurate is the intent scoring?",
      engagement: { likes: 8, comments: 2 },
      keywords: ["agency", "HubSpot integration", "intent scoring"],
    },
  ];

  const getIntentColor = (intent: number) => {
    if (intent >= 85) return "bg-primary text-primary-foreground";
    if (intent >= 70) return "bg-chart-2 text-foreground";
    return "bg-muted text-muted-foreground";
  };

  const getSentimentColor = (sentiment: string) => {
    if (sentiment === "Positive") return "text-green-500";
    if (sentiment === "Negative") return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <div className="p-8 bg-background">
      <div className="flex gap-6">
        {/* Left: Filters */}
        {showFilters && (
          <div className="w-80 flex-shrink-0">
            <FilterPanel onClose={() => setShowFilters(false)} />
          </div>
        )}

        {/* Main: Table */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Monitor Stream</h1>
              <p className="text-muted-foreground">
                Real-time feed of high-value conversations across platforms
              </p>
            </div>
            <Button variant="secondary" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? "Hide" : "Show"} Filters
            </Button>
          </div>

          {/* Search Bar */}
          <Card className="p-4 bg-card border-border">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search conversations, keywords, users..."
                  className="pl-10 bg-background"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-48 bg-background">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="reddit">Reddit</SelectItem>
                  <SelectItem value="twitter">X (Twitter)</SelectItem>
                  <SelectItem value="quora">Quora</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="high">
                <SelectTrigger className="w-48 bg-background">
                  <SelectValue placeholder="Intent Score" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Intent</SelectItem>
                  <SelectItem value="high">High (85-100)</SelectItem>
                  <SelectItem value="medium">Medium (70-84)</SelectItem>
                  <SelectItem value="low">Low (&lt;70)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* Table */}
          <Card className="bg-card border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Comment</TableHead>
                  <TableHead>Intent</TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead>Reply</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {threads.map((thread) => (
                  <TableRow
                    key={thread.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => setSelectedComment({
                      id: thread.id.toString(),
                      platform: thread.platform,
                      author: thread.user,
                      followers: 5000,
                      timestamp: thread.timestamp,
                      content: thread.content,
                      intentScore: thread.intent,
                      sentiment: thread.sentiment,
                      keywords: thread.keywords,
                      replyStatus: "Not Sent",
                      clicks: 0,
                    })}
                  >
                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                      {thread.timestamp}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {thread.platform}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{thread.user}</div>
                        <div className="text-xs text-muted-foreground">
                          {thread.engagement.likes} followers
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm truncate">{thread.content}</p>
                    </TableCell>
                    <TableCell>
                      <Badge className={getIntentColor(thread.intent)}>
                        {thread.intent}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`text-sm ${getSentimentColor(thread.sentiment)}`}>
                        {thread.sentiment}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        Not Sent
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">0</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          <Sparkles className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Load More */}
          <div className="text-center">
            <Button variant="secondary" size="lg">
              Load More Conversations
            </Button>
          </div>
        </div>
        {/* Right: Detail Pane */}
        {selectedComment && (
          <div className="w-[600px] flex-shrink-0">
            <DetailPane
              comment={selectedComment}
              onClose={() => setSelectedComment(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MonitorStream;
