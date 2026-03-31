
-- Storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Allow anyone to view blog images
CREATE POLICY "Public read blog images" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');

-- Authenticated users can upload images
CREATE POLICY "Auth upload blog images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Users can update/delete own uploads
CREATE POLICY "Users manage own blog images" ON storage.objects FOR UPDATE USING (bucket_id = 'blog-images' AND (select auth.uid()) = owner);
CREATE POLICY "Users delete own blog images" ON storage.objects FOR DELETE USING (bucket_id = 'blog-images' AND (select auth.uid()) = owner);

-- Post views table for analytics
CREATE TABLE public.post_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES public.posts(id) ON DELETE CASCADE NOT NULL,
  viewed_at timestamptz NOT NULL DEFAULT now(),
  session_id text,
  referrer text
);

ALTER TABLE public.post_views ENABLE ROW LEVEL SECURITY;

-- Anyone can insert views
CREATE POLICY "Anyone can record views" ON public.post_views FOR INSERT WITH CHECK (true);

-- Admins/editors can read views
CREATE POLICY "Admins can read views" ON public.post_views FOR SELECT USING (
  has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor')
);

-- Authors can read views on their own posts
CREATE POLICY "Authors can read own post views" ON public.post_views FOR SELECT USING (
  EXISTS (SELECT 1 FROM posts WHERE posts.id = post_views.post_id AND posts.author_id = auth.uid())
);

-- Index for performance
CREATE INDEX idx_post_views_post_id ON public.post_views(post_id);
CREATE INDEX idx_post_views_viewed_at ON public.post_views(viewed_at);
