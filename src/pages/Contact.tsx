import { useState } from "react";
import BlogLayout from "@/components/BlogLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) return;
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message sent! 🌿", description: "We'll get back to you as soon as possible." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 500);
  };

  return (
    <BlogLayout>
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-3">Let's talk</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a question, story idea, or partnership inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} className="rounded-xl h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required maxLength={200} className="rounded-xl h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more..." rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={2000} className="rounded-xl" />
              </div>
              <Button type="submit" className="gap-2 rounded-xl h-11" disabled={loading}>
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email", text: "hello@tcb.com" },
              { icon: MapPin, title: "Location", text: "San Francisco, CA" },
              { icon: Clock, title: "Response Time", text: "Within 48 hours" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3 p-4 rounded-xl bg-secondary/50">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default Contact;
