
CREATE OR REPLACE FUNCTION public.get_trending_posts(days_back integer DEFAULT 7, max_posts integer DEFAULT 5)
RETURNS TABLE(post_id uuid, view_count bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT pv.post_id, COUNT(*) as view_count
  FROM post_views pv
  JOIN posts p ON p.id = pv.post_id
  WHERE pv.viewed_at >= NOW() - (days_back || ' days')::interval
    AND p.status = 'published'
  GROUP BY pv.post_id
  ORDER BY view_count DESC
  LIMIT max_posts;
$$;
