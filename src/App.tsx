import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import Category from "./pages/Category";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const PostsList = lazy(() => import("./pages/admin/PostsList"));
const PostEditor = lazy(() => import("./pages/admin/PostEditor"));
const CategoriesManager = lazy(() => import("./pages/admin/CategoriesManager"));
const MediaLibrary = lazy(() => import("./pages/admin/MediaLibrary"));
const AnalyticsDashboard = lazy(() => import("./pages/admin/AnalyticsDashboard"));
const AppSettings = lazy(() => import("./pages/admin/AppSettings"));
const Profile = lazy(() => import("./pages/Profile"));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-muted-foreground">Loading…</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/posts" element={<PostsList />} />
            <Route path="/admin/posts/:id" element={<PostEditor />} />
            <Route path="/admin/categories" element={<CategoriesManager />} />
            <Route path="/admin/media" element={<MediaLibrary />} />
            <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
            <Route path="/admin/settings" element={<AppSettings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
