import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">
            Let's <span className="text-primary">Talk</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need a demo, have questions, or want to discuss enterprise deployment, we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Options */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border animate-fade-in">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Schedule Demo</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Book a 30-minute personalized demo with our solutions team
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Book Demo
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <MessageSquare className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Talk to our team right now for quick questions
              </p>
              <Button variant="secondary" className="w-full">
                Start Chat
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get in touch via email for detailed inquiries
              </p>
              <a
                href="mailto:sales@leadequator.ai"
                className="text-primary hover:underline text-sm"
              >
                sales@leadequator.ai
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2 p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  placeholder="Acme Corp"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Your Role *</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marketing">Marketing Leader</SelectItem>
                    <SelectItem value="pr">PR/Communications</SelectItem>
                    <SelectItem value="growth">Growth/Demand Gen</SelectItem>
                    <SelectItem value="sales">Sales Leader</SelectItem>
                    <SelectItem value="agency">Agency Owner</SelectItem>
                    <SelectItem value="executive">C-Level Executive</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">What are you interested in? *</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pilot">Pilot Program</SelectItem>
                    <SelectItem value="scale">Scale Plan</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="demo">Demo Request</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your use case, timeline, or any specific questions..."
                  rows={5}
                  className="bg-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Submit Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 2 business hours. For urgent
                inquiries, please use live chat.
              </p>
            </form>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Enterprise & Partnership Inquiries
          </h3>
          <p className="text-muted-foreground text-center mb-4">
            For custom enterprise deployments, white-label partnerships, or API access, contact our enterprise team directly.
          </p>
          <div className="text-center">
            <a
              href="mailto:enterprise@leadequator.ai"
              className="text-primary hover:underline font-semibold"
            >
              enterprise@leadequator.ai
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
