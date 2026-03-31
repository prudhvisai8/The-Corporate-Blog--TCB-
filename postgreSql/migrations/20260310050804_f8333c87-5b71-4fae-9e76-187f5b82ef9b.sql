CREATE TABLE public.site_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Settings readable by everyone" ON public.site_settings
  FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage settings" ON public.site_settings
  FOR ALL TO authenticated USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

INSERT INTO public.site_settings (key, value) VALUES
  ('blog_name', '"The Corporate Blog"'),
  ('blog_tagline', '"Insights for Modern Leaders"'),
  ('dark_mode_enabled', 'true'),
  ('seo_defaults', '{"meta_title": "The Corporate Blog — Insights for Modern Leaders", "meta_description": "Expert insights on leadership, technology, strategy, and innovation for modern business leaders.", "og_image": ""}'),
  ('comments_enabled', 'false');