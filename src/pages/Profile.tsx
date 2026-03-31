import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import BlogLayout from "@/components/BlogLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { User, Lock, Mail, Trash2 } from "lucide-react";

const Profile = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [loading, user, navigate]);

  const [displayName, setDisplayName] = useState("Demo User");
  const [bio, setBio] = useState("A passionate reader and writer.");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const updateProfile = () => {
    toast({ title: "Profile updated" });
  };

  const changePassword = () => {
    if (newPassword.length < 6) {
      toast({ title: "Password must be at least 6 characters", variant: "destructive" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Passwords don't match", variant: "destructive" });
      return;
    }
    toast({ title: "Password updated" });
    setNewPassword("");
    setConfirmPassword("");
  };

  const toggleNewsletter = (checked: boolean) => {
    setNewsletterSubscribed(checked);
    toast({ title: checked ? "Subscribed to newsletter" : "Unsubscribed from newsletter" });
  };

  const deleteAccount = async () => {
    toast({ title: "Account deletion requested", description: "Please contact admin to complete account deletion." });
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-pulse text-muted-foreground">Loading…</div>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Profile Settings</h1>

        {/* Profile Info */}
        <section className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User size={20} className="text-accent-foreground" />
            <h2 className="font-serif text-xl font-bold text-foreground">Profile Information</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="displayName">Display Name</Label>
              <Input id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="avatarUrl">Avatar URL</Label>
              <Input id="avatarUrl" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} placeholder="https://..." className="mt-1" />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="mt-1" />
            </div>
            <Button onClick={updateProfile}>Save Profile</Button>
          </div>
        </section>

        {/* Password */}
        <section className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock size={20} className="text-accent-foreground" />
            <h2 className="font-serif text-xl font-bold text-foreground">Change Password</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="newPw">New Password</Label>
              <Input id="newPw" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="confirmPw">Confirm Password</Label>
              <Input id="confirmPw" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1" />
            </div>
            <Button onClick={changePassword}>Update Password</Button>
          </div>
        </section>

        {/* Email Preferences */}
        <section className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail size={20} className="text-accent-foreground" />
            <h2 className="font-serif text-xl font-bold text-foreground">Email Preferences</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Newsletter</p>
              <p className="text-xs text-muted-foreground">Receive weekly blog updates</p>
            </div>
            <Switch checked={newsletterSubscribed} onCheckedChange={toggleNewsletter} />
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-card rounded-2xl border border-destructive/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 size={20} className="text-destructive" />
            <h2 className="font-serif text-xl font-bold text-destructive">Danger Zone</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          {!showDelete ? (
            <Button variant="destructive" onClick={() => setShowDelete(true)}>Delete Account</Button>
          ) : (
            <div className="flex gap-3">
              <Button variant="destructive" onClick={deleteAccount}>Confirm Delete</Button>
              <Button variant="outline" onClick={() => setShowDelete(false)}>Cancel</Button>
            </div>
          )}
        </section>
      </div>
    </BlogLayout>
  );
};

export default Profile;
