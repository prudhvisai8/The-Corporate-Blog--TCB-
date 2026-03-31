import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Password updated", description: "You can now sign in with your new password." });
      setLoading(false);
      navigate("/auth");
    }, 500);
  };

  return (
    <BlogLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">Set New Password</h1>
          <p className="text-muted-foreground text-sm text-center mb-8">Enter your new password below.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={6}
                />
              </div>
            </div>
            <Button type="submit" className="w-full h-11" disabled={loading}>
              Update Password
            </Button>
          </form>
        </div>
      </div>
    </BlogLayout>
  );
};

export default ResetPassword;
