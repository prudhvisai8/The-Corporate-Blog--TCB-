
-- Step 1: Create auth users (trigger will auto-create profiles and roles)
INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, created_at, updated_at, confirmation_token, raw_app_meta_data, raw_user_meta_data)
VALUES
  ('a1a00000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'sarah@tcb.com', crypt('seedpassword123', gen_salt('bf')), now(), now(), now(), '', '{"provider":"email","providers":["email"]}'::jsonb, '{"full_name":"Sarah Chen"}'::jsonb),
  ('a1a00000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'marcus@tcb.com', crypt('seedpassword123', gen_salt('bf')), now(), now(), now(), '', '{"provider":"email","providers":["email"]}'::jsonb, '{"full_name":"Marcus Rivera"}'::jsonb),
  ('a1a00000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'anika@tcb.com', crypt('seedpassword123', gen_salt('bf')), now(), now(), now(), '', '{"provider":"email","providers":["email"]}'::jsonb, '{"full_name":"Anika Patel"}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- Step 2: Update auto-created profiles with avatars and bios
UPDATE public.profiles SET display_name = 'Sarah Chen', avatar_url = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', bio = 'Editor-in-Chief with 15 years of experience covering technology and business transformation.' WHERE user_id = 'a1a00000-0000-0000-0000-000000000001';
UPDATE public.profiles SET display_name = 'Marcus Rivera', avatar_url = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', bio = 'Senior writer specializing in culture, leadership, and the future of work.' WHERE user_id = 'a1a00000-0000-0000-0000-000000000002';
UPDATE public.profiles SET display_name = 'Anika Patel', avatar_url = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', bio = 'Tech analyst and innovation researcher exploring how emerging technologies reshape industries.' WHERE user_id = 'a1a00000-0000-0000-0000-000000000003';

-- Step 3: Seed categories
INSERT INTO public.categories (id, name, slug, description) VALUES
  ('c1a00000-0000-0000-0000-000000000001', 'Technology', 'technology', 'Latest trends in tech and digital transformation'),
  ('c1a00000-0000-0000-0000-000000000002', 'Business', 'business', 'Business strategy and market analysis'),
  ('c1a00000-0000-0000-0000-000000000003', 'Leadership', 'leadership', 'Insights on modern leadership and management'),
  ('c1a00000-0000-0000-0000-000000000004', 'Innovation', 'innovation', 'Cutting-edge ideas and creative solutions'),
  ('c1a00000-0000-0000-0000-000000000005', 'Culture', 'culture', 'Workplace culture and organizational dynamics'),
  ('c1a00000-0000-0000-0000-000000000006', 'Strategy', 'strategy', 'Strategic planning and competitive analysis')
ON CONFLICT (id) DO NOTHING;

-- Step 4: Seed posts
INSERT INTO public.posts (id, title, slug, excerpt, content, cover_image_url, author_id, status, published_at, read_time) VALUES
  ('d1a00000-0000-0000-0000-000000000001', 'The Future of AI in Enterprise: What Leaders Need to Know in 2026', 'future-of-ai-enterprise', 'Artificial intelligence is reshaping how businesses operate at every level.', '[{"type":"paragraph","text":"The enterprise landscape is undergoing a seismic shift. AI has become the central nervous system of modern business."},{"type":"heading","text":"The New AI Paradigm"},{"type":"paragraph","text":"2026 marks the era of practical AI deployment."},{"type":"heading","text":"Data as the New Competitive Moat"},{"type":"paragraph","text":"Organizations with proprietary datasets are pulling ahead."},{"type":"heading","text":"Human-AI Collaboration"},{"type":"paragraph","text":"The most successful companies augment human capabilities with AI."}]'::jsonb, 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop', 'a1a00000-0000-0000-0000-000000000001', 'published', '2026-02-24T10:00:00Z', 8),
  ('d1a00000-0000-0000-0000-000000000002', 'Building Culture in a Distributed World', 'remote-work-culture-2026', 'The companies thriving are building new frameworks for connection and collaboration.', '[{"type":"paragraph","text":"A clear divide has emerged between companies that thrive with remote work and those still struggling."},{"type":"heading","text":"Beyond the Virtual Water Cooler"},{"type":"paragraph","text":"Successful distributed teams have invented new rituals for asynchronous collaboration."}]'::jsonb, 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop', 'a1a00000-0000-0000-0000-000000000002', 'published', '2026-02-22T10:00:00Z', 6),
  ('d1a00000-0000-0000-0000-000000000003', 'Why Sustainability Is Now the Smartest Business Strategy', 'sustainable-business-strategy', 'Companies embedding sustainability into their core strategy are seeing competitive advantages.', '[{"type":"paragraph","text":"Sustainability in business has fundamentally changed from cost center to strategic differentiator."},{"type":"heading","text":"The ROI of Going Green"},{"type":"paragraph","text":"Companies with strong ESG scores outperform peers by 15-20 percent."}]'::jsonb, 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=500&fit=crop', 'a1a00000-0000-0000-0000-000000000003', 'published', '2026-02-20T10:00:00Z', 7),
  ('d1a00000-0000-0000-0000-000000000004', 'Leadership in the Age of Uncertainty', 'leadership-age-of-uncertainty', 'The best leaders ask the right questions and create environments where innovation flourishes.', '[{"type":"paragraph","text":"Modern leadership demands a fundamentally different toolkit."},{"type":"heading","text":"Embrace Radical Transparency"},{"type":"paragraph","text":"Leaders who share context generously enable better team decisions."}]'::jsonb, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop', 'a1a00000-0000-0000-0000-000000000001', 'published', '2026-02-18T10:00:00Z', 5),
  ('d1a00000-0000-0000-0000-000000000005', 'The Fintech Revolution: Reshaping Traditional Banking', 'fintech-revolution-banking', 'Fintech startups are challenging centuries-old banking models with user-centric design.', '[{"type":"paragraph","text":"Banking is experiencing its most significant disruption since the ATM."},{"type":"heading","text":"Embedded Finance Goes Mainstream"},{"type":"paragraph","text":"Financial services are being woven into everyday digital experiences."}]'::jsonb, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', 'a1a00000-0000-0000-0000-000000000002', 'published', '2026-02-15T10:00:00Z', 9),
  ('d1a00000-0000-0000-0000-000000000006', 'Innovation Frameworks That Actually Deliver Results', 'innovation-frameworks-that-work', 'Structured approaches that consistently produce breakthrough ideas.', '[{"type":"paragraph","text":"Innovation has become the most overused promise in corporate strategy."},{"type":"heading","text":"The Innovation Audit"},{"type":"paragraph","text":"Successful companies start with honest assessment of capabilities and constraints."}]'::jsonb, 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop', 'a1a00000-0000-0000-0000-000000000003', 'published', '2026-02-12T10:00:00Z', 7)
ON CONFLICT (id) DO NOTHING;

-- Step 5: Link posts to categories
INSERT INTO public.post_categories (post_id, category_id) VALUES
  ('d1a00000-0000-0000-0000-000000000001', 'c1a00000-0000-0000-0000-000000000001'),
  ('d1a00000-0000-0000-0000-000000000002', 'c1a00000-0000-0000-0000-000000000005'),
  ('d1a00000-0000-0000-0000-000000000003', 'c1a00000-0000-0000-0000-000000000006'),
  ('d1a00000-0000-0000-0000-000000000004', 'c1a00000-0000-0000-0000-000000000003'),
  ('d1a00000-0000-0000-0000-000000000005', 'c1a00000-0000-0000-0000-000000000002'),
  ('d1a00000-0000-0000-0000-000000000006', 'c1a00000-0000-0000-0000-000000000004')
ON CONFLICT DO NOTHING;
