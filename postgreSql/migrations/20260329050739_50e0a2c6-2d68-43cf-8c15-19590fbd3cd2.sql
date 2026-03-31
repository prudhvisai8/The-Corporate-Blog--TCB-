
-- Audit logs table
CREATE TABLE public.audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  action text NOT NULL,
  entity_type text NOT NULL,
  entity_id text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view audit logs" ON public.audit_logs
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authenticated can insert audit logs" ON public.audit_logs
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Add scheduled_at and sponsored columns to posts
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS scheduled_at timestamptz;
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS is_sponsored boolean NOT NULL DEFAULT false;

-- Full-text search index on posts
CREATE INDEX IF NOT EXISTS idx_posts_fulltext ON public.posts
  USING GIN (to_tsvector('english', coalesce(title, '') || ' ' || coalesce(excerpt, '')));

-- Index for scheduled publishing queries
CREATE INDEX IF NOT EXISTS idx_posts_scheduled ON public.posts (scheduled_at) WHERE scheduled_at IS NOT NULL AND status = 'draft';
