import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, ArrowRight, Leaf } from "lucide-react";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { signIn, signUp } = useAuth();
  const redirectTo = searchParams.get("redirect") || "/";

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "forgot") {
        toast({ title: "Check your email", description: "We sent you a password reset link." });
        setMode("login");
      } else if (mode === "signup") {
        signUp(email, password, fullName);
        toast({ title: "Account created! 🎉", description: "Welcome to The Corporate Blog." });
        navigate(redirectTo);
      } else {
        signIn(email, password);
        navigate(redirectTo);
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Decorative header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
              <Leaf className="w-7 h-7 text-accent" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
              {mode === "login" ? "Welcome Back" : mode === "signup" ? "Join the Community" : "Reset Password"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {mode === "login"
                ? "Sign in to access your dashboard"
                : mode === "signup"
                ? "Create an account to start your journey"
                : "Enter your email to receive a reset link"}
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="fullName" placeholder="Jane Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} className="pl-10 h-11 rounded-xl" required />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 h-11 rounded-xl" required />
                </div>
              </div>
              {mode !== "forgot" && (
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 h-11 rounded-xl" required minLength={6} />
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full h-11 gap-2 rounded-xl font-medium" disabled={loading}>
                {mode === "login" ? "Sign In" : mode === "signup" ? "Create Account" : "Send Reset Link"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground space-y-2">
            {mode === "login" && (
              <>
                <button onClick={() => setMode("forgot")} className="text-accent hover:underline block mx-auto">
                  Forgot your password?
                </button>
                <p>
                  Don't have an account?{" "}
                  <button onClick={() => setMode("signup")} className="text-accent font-medium hover:underline">
                    Sign up
                  </button>
                </p>
              </>
            )}
            {mode === "signup" && (
              <p>
                Already have an account?{" "}
                <button onClick={() => setMode("login")} className="text-accent font-medium hover:underline">
                  Sign in
                </button>
              </p>
            )}
            {mode === "forgot" && (
              <button onClick={() => setMode("login")} className="text-accent hover:underline">
                ← Back to sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Auth;
