
-- Fix: tighten post_categories write policy
DROP POLICY "Authenticated can manage post categories" ON public.post_categories;

CREATE POLICY "Authors can manage own post categories" ON public.post_categories
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.posts WHERE id = post_id AND author_id = auth.uid())
    OR public.has_role(auth.uid(), 'admin')
    OR public.has_role(auth.uid(), 'editor')
  );

CREATE POLICY "Authors can delete own post categories" ON public.post_categories
  FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.posts WHERE id = post_id AND author_id = auth.uid())
    OR public.has_role(auth.uid(), 'admin')
    OR public.has_role(auth.uid(), 'editor')
  );
