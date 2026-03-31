export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  memberSince: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  views: number;
  metaTitle?: string;
  metaDescription?: string;
  isSponsored?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const authors: Author[] = [
  {
    id: "author-1",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    role: "Editor-in-Chief",
    bio: "Sarah is a seasoned tech journalist with over 15 years of experience covering enterprise technology, AI, and digital transformation. She previously worked at TechCrunch and Wired.",
    memberSince: "2024-01-15",
  },
  {
    id: "author-2",
    name: "Marcus Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    role: "Senior Writer",
    bio: "Marcus specializes in business strategy and fintech. He holds an MBA from Wharton and spent a decade in investment banking before turning to journalism.",
    memberSince: "2024-03-20",
  },
  {
    id: "author-3",
    name: "Anika Patel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    role: "Tech Analyst",
    bio: "Anika is an MIT-trained engineer and former product lead at Google. She writes about innovation, product development, and emerging technologies.",
    memberSince: "2024-06-10",
  },
  {
    id: "author-4",
    name: "James O'Connor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    role: "Contributing Writer",
    bio: "James is a leadership coach and bestselling author who has advised Fortune 500 CEOs. His columns explore the human side of business.",
    memberSince: "2024-08-05",
  },
  {
    id: "author-5",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    role: "Sustainability Editor",
    bio: "Priya covers ESG, climate tech, and sustainable business practices. She previously led sustainability research at McKinsey & Company.",
    memberSince: "2025-01-12",
  },
];

export const categories: Category[] = [
  { id: "cat-1", name: "Technology", slug: "technology", description: "Latest in tech, AI, and digital transformation" },
  { id: "cat-2", name: "Business", slug: "business", description: "Strategy, finance, and market insights" },
  { id: "cat-3", name: "Leadership", slug: "leadership", description: "Management, culture, and executive insights" },
  { id: "cat-4", name: "Innovation", slug: "innovation", description: "Product development and creative thinking" },
  { id: "cat-5", name: "Culture", slug: "culture", description: "Workplace culture and team dynamics" },
  { id: "cat-6", name: "Strategy", slug: "strategy", description: "Business strategy and competitive advantage" },
];

export const posts: Post[] = [
  {
    id: "1",
    slug: "future-of-ai-enterprise",
    title: "The Future of AI in Enterprise: What Leaders Need to Know in 2026",
    excerpt: "Artificial intelligence is reshaping how businesses operate at every level. From predictive analytics to autonomous workflows, here's what forward-thinking leaders are prioritizing this year.",
    content: `<p>The enterprise landscape is undergoing a seismic shift. Artificial intelligence, once confined to research labs and tech giants, has become the central nervous system of modern business operations.</p>
<h2>The New AI Paradigm</h2>
<p>Unlike the hype cycles of previous years, 2026 marks the era of practical AI deployment. Companies are no longer asking "should we use AI?" but rather "how do we optimize our AI stack?" This fundamental shift in mindset has led to three major trends that every business leader must understand.</p>
<p>First, autonomous workflows are replacing traditional automation. Where robotic process automation (RPA) handled repetitive tasks, AI agents now manage entire business processes — from procurement to customer service — with minimal human oversight.</p>
<h2>Data as the New Competitive Moat</h2>
<p>Organizations with proprietary, high-quality datasets are pulling ahead of competitors. The ability to fine-tune foundation models on domain-specific data has become the single most valuable capability a company can develop.</p>
<p>Consider the financial services sector: firms that invested early in data infrastructure are now deploying AI models that can predict market movements with unprecedented accuracy, assess credit risk in milliseconds, and personalize investment strategies for millions of clients simultaneously.</p>
<h2>The Human-AI Collaboration Framework</h2>
<p>The most successful companies aren't replacing workers with AI — they're augmenting human capabilities. This "centaur" model, where humans and AI collaborate, consistently outperforms either working alone.</p>
<p>The key is designing workflows where AI handles data processing, pattern recognition, and routine decisions, while humans focus on strategy, creativity, and relationship building.</p>`,
    category: "Technology",
    categorySlug: "technology",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
    author: authors[0],
    publishedAt: "2026-02-24",
    readTime: 8,
    featured: true,
    views: 12450,
  },
  {
    id: "2",
    slug: "remote-work-culture-2026",
    title: "Building Culture in a Distributed World: Lessons from the Front Lines",
    excerpt: "Remote work is here to stay. The companies thriving aren't fighting it — they're building entirely new frameworks for connection, collaboration, and culture.",
    content: `<p>Three years into the permanent remote work revolution, a clear divide has emerged between companies that have thrived and those still struggling to maintain cohesion.</p><h2>Beyond the Virtual Water Cooler</h2><p>The most successful distributed teams have stopped trying to replicate office culture online. Instead, they've invented entirely new rituals and practices designed specifically for asynchronous, distributed collaboration.</p><p>Take Automattic, the company behind WordPress. With over 1,900 employees across 96 countries, they've perfected the art of asynchronous communication. Every meeting has a written agenda and summary. Every decision is documented in a searchable internal blog. The result? Faster decision-making and better institutional memory than most co-located teams.</p><h2>The New Social Contract</h2><p>The most innovative companies are rethinking the employment relationship entirely. Instead of measuring time spent working, they measure outcomes delivered. This shift requires enormous trust — but the rewards are transformative.</p>`,
    category: "Culture",
    categorySlug: "culture",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    author: authors[1],
    publishedAt: "2026-02-22",
    readTime: 6,
    featured: false,
    views: 8920,
  },
  {
    id: "3",
    slug: "sustainable-business-strategy",
    title: "Why Sustainability Is Now the Smartest Business Strategy",
    excerpt: "ESG isn't just about compliance anymore. Companies embedding sustainability into their core strategy are seeing measurable competitive advantages.",
    content: `<p>The conversation around sustainability in business has fundamentally changed. What was once viewed as a cost center or PR exercise has become a genuine strategic differentiator.</p><h2>The ROI of Green</h2><p>Companies that invested heavily in sustainability over the past five years are now reaping significant financial rewards. Unilever's sustainable brands grow 69% faster than their conventional counterparts. Patagonia's commitment to environmental activism has fueled double-digit revenue growth.</p><p>But it's not just consumer-facing brands. B2B companies that prioritize sustainability are winning more contracts, attracting better talent, and reducing operational costs through efficiency improvements.</p><h2>Regulatory Tailwinds</h2><p>With the EU's Corporate Sustainability Reporting Directive (CSRD) now in full effect and similar regulations emerging in North America and Asia, companies that got ahead of the curve are finding themselves at a massive advantage. They have the data infrastructure, the processes, and the expertise that competitors are now scrambling to build.</p>`,
    category: "Strategy",
    categorySlug: "strategy",
    coverImage: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=500&fit=crop",
    author: authors[4],
    publishedAt: "2026-02-20",
    readTime: 7,
    featured: false,
    views: 7340,
  },
  {
    id: "4",
    slug: "leadership-age-of-uncertainty",
    title: "Leadership in the Age of Uncertainty: 5 Principles That Matter",
    excerpt: "The best leaders today aren't the ones with all the answers. They're the ones who ask the right questions and create environments where innovation can flourish.",
    content: `<p>Modern leadership demands a fundamentally different toolkit than what business schools taught a decade ago.</p><h2>1. Embrace Radical Transparency</h2><p>In an era of instant information, trying to control narratives is futile. The best leaders share context generously — including their own uncertainties. This vulnerability doesn't weaken authority; it builds trust.</p><h2>2. Practice Adaptive Decision-Making</h2><p>The pace of change means that waiting for perfect information is itself a decision — usually a bad one. Great leaders make reversible decisions quickly and irreversible ones carefully, but they never let analysis paralysis set in.</p><h2>3. Build Anti-Fragile Teams</h2><p>Rather than protecting teams from stress and change, the best leaders build organizations that actually get stronger when challenged. This means encouraging experimentation, normalizing failure, and celebrating learning.</p><h2>4. Lead with Questions</h2><p>The most powerful tool in a leader's arsenal is a well-timed question. Instead of providing answers, ask: "What would we do if we weren't afraid?" or "What assumption are we most wrong about?"</p><h2>5. Invest in Psychological Safety</h2><p>Google's Project Aristotle proved that psychological safety is the single most important factor in team performance. Leaders who create environments where people feel safe to speak up, disagree, and take risks consistently outperform those who don't.</p>`,
    category: "Leadership",
    categorySlug: "leadership",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
    author: authors[3],
    publishedAt: "2026-02-18",
    readTime: 5,
    featured: false,
    views: 9870,
  },
  {
    id: "5",
    slug: "fintech-revolution-banking",
    title: "The Fintech Revolution: How Startups Are Reshaping Traditional Banking",
    excerpt: "From embedded finance to decentralized lending, fintech startups are challenging centuries-old banking models with speed, transparency, and user-centric design.",
    content: `<p>The banking industry is experiencing its most significant disruption since the invention of the ATM.</p><h2>The Embedded Finance Wave</h2><p>The biggest shift isn't happening in banking apps — it's happening in non-banking apps. Shopify offers loans to its merchants. Uber provides instant pay to drivers. Airbnb handles payments across 190 countries. This is embedded finance: financial services seamlessly integrated into platforms where people already spend their time.</p><h2>The Infrastructure Play</h2><p>Behind every fintech success story is a layer of critical infrastructure. Companies like Stripe, Plaid, and Marqeta provide the rails on which modern financial services are built. This infrastructure-as-a-service model has dramatically reduced the cost and complexity of launching new financial products.</p>`,
    category: "Business",
    categorySlug: "business",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    author: authors[1],
    publishedAt: "2026-02-15",
    readTime: 9,
    featured: false,
    views: 6540,
  },
  {
    id: "6",
    slug: "innovation-frameworks-that-work",
    title: "Beyond Brainstorming: Innovation Frameworks That Actually Deliver Results",
    excerpt: "Most corporate innovation programs fail. Here are the structured approaches that consistently produce breakthrough ideas and bring them to market.",
    content: `<p>Innovation has become the most overused and under-delivered promise in corporate strategy.</p><h2>The Problem with Brainstorming</h2><p>Research from the University of Minnesota found that individuals working alone generate more — and better — ideas than groups brainstorming together. Yet companies continue to rely on whiteboard sessions and sticky notes as their primary innovation tool.</p><h2>Design Sprints: Speed Over Perfection</h2><p>Google Ventures' Design Sprint methodology compresses months of work into five days. By forcing teams to prototype and test ideas within a week, it eliminates the endless iteration cycles that kill most innovation projects.</p><h2>The Innovation Accounting Model</h2><p>Eric Ries' concept of innovation accounting provides a framework for measuring progress in uncertain environments. Instead of traditional metrics like revenue and profit, innovation accounting tracks learning velocity, hypothesis validation rate, and pivot efficiency.</p>`,
    category: "Innovation",
    categorySlug: "innovation",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    author: authors[2],
    publishedAt: "2026-02-12",
    readTime: 7,
    featured: false,
    views: 5230,
  },
  {
    id: "7",
    slug: "ai-powered-customer-experience",
    title: "How AI Is Redefining Customer Experience in 2026",
    excerpt: "From hyper-personalization to predictive support, AI is transforming every touchpoint in the customer journey. Here's what the best companies are doing differently.",
    content: `<p>Customer experience has always been a competitive differentiator. But in 2026, AI is making it possible to deliver experiences that were unimaginable just two years ago.</p><h2>Predictive Customer Service</h2><p>The best companies no longer wait for customers to report problems. AI systems monitor usage patterns, detect anomalies, and proactively reach out to customers before they even know something is wrong. This shift from reactive to proactive support has reduced churn rates by up to 35% at early adopters.</p><h2>Hyper-Personalization at Scale</h2><p>Netflix's recommendation engine was just the beginning. Today's AI-powered personalization engines can customize entire product experiences — from pricing to features to UI layout — for individual users in real-time.</p>`,
    category: "Technology",
    categorySlug: "technology",
    coverImage: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=500&fit=crop",
    author: authors[0],
    publishedAt: "2026-02-10",
    readTime: 6,
    featured: false,
    views: 11200,
  },
  {
    id: "8",
    slug: "scaling-startup-to-enterprise",
    title: "From Startup to Scale-Up: Navigating the Messy Middle",
    excerpt: "The transition from startup to established company is where most businesses fail. Learn the operational frameworks that help companies scale without breaking.",
    content: `<p>Every successful startup eventually faces an identity crisis. The scrappy, move-fast culture that drove early growth begins to create chaos at scale. Processes are needed, but bureaucracy kills innovation. How do you maintain agility while building reliability?</p><h2>The Three Stages of Scaling</h2><p>Companies typically go through three distinct phases: Search (product-market fit), Build (scaling what works), and Sustain (optimizing and defending). Each requires fundamentally different leadership approaches, organizational structures, and metrics.</p><h2>Hire for the Next Stage, Not This One</h2><p>One of the most common scaling mistakes is hiring people who are perfect for the current stage but wrong for the next. A brilliant hacker who built your MVP may struggle in a world of code reviews and documentation. A Fortune 500 exec may suffocate in a 50-person company still finding its footing.</p>`,
    category: "Business",
    categorySlug: "business",
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
    author: authors[1],
    publishedAt: "2026-02-08",
    readTime: 8,
    featured: false,
    views: 4870,
  },
  {
    id: "9",
    slug: "quantum-computing-business-impact",
    title: "Quantum Computing: When Will It Actually Matter for Business?",
    excerpt: "Cut through the hype. Here's a realistic assessment of where quantum computing stands today and when it will start impacting real business operations.",
    content: `<p>Quantum computing has been "5 years away" for the past 20 years. But recent breakthroughs from Google, IBM, and a new wave of startups suggest we may finally be approaching a tipping point.</p><h2>The Current State of Play</h2><p>As of early 2026, we're in the "noisy intermediate-scale quantum" (NISQ) era. Current quantum computers can solve certain highly specialized problems faster than classical computers, but they're not yet reliable enough for production workloads.</p><h2>Where Business Impact Will Come First</h2><p>The first practical business applications of quantum computing will likely emerge in three areas: drug discovery and materials science, financial portfolio optimization, and supply chain logistics.</p>`,
    category: "Technology",
    categorySlug: "technology",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
    author: authors[2],
    publishedAt: "2026-02-05",
    readTime: 10,
    featured: false,
    views: 7680,
  },
  {
    id: "10",
    slug: "dei-beyond-checkboxes",
    title: "DEI Beyond Checkboxes: Building Genuinely Inclusive Organizations",
    excerpt: "Most DEI programs are performative at best. Companies that are actually moving the needle are taking a fundamentally different approach.",
    content: `<p>After years of corporate diversity, equity, and inclusion (DEI) initiatives, the results have been mixed at best. Many organizations have hired Chief Diversity Officers, published equity reports, and hosted unconscious bias training — yet their leadership teams look largely the same.</p><h2>Why Traditional DEI Fails</h2><p>The fundamental problem with most DEI programs is that they treat symptoms rather than causes. Unconscious bias training doesn't change organizational structures. Mentoring programs don't fix broken promotion processes. And diversity reports without accountability are just expensive paperwork.</p><h2>The Structural Approach</h2><p>Companies seeing real results are taking a structural approach: redesigning hiring processes to remove bias, implementing blind reviews for promotions, creating transparent pay frameworks, and measuring inclusion metrics with the same rigor as financial metrics.</p>`,
    category: "Culture",
    categorySlug: "culture",
    coverImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop",
    author: authors[3],
    publishedAt: "2026-02-03",
    readTime: 7,
    featured: false,
    views: 6120,
  },
  {
    id: "11",
    slug: "supply-chain-resilience",
    title: "Building Supply Chain Resilience: Lessons from the Post-Pandemic Era",
    excerpt: "The supply chain disruptions of 2020-2023 exposed critical vulnerabilities. Here's how leading companies are building antifragile supply networks.",
    content: `<p>The pandemic-era supply chain crisis was a wake-up call that many companies are still processing. But the smartest organizations didn't just recover — they used the crisis as a catalyst to fundamentally reimagine their supply chains.</p><h2>From Just-in-Time to Just-in-Case</h2><p>For decades, lean manufacturing and just-in-time inventory were considered best practices. The pandemic proved that efficiency without resilience is a vulnerability. Leading companies are now maintaining strategic buffers of critical components while using AI to optimize inventory levels dynamically.</p>`,
    category: "Strategy",
    categorySlug: "strategy",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    author: authors[4],
    publishedAt: "2026-01-30",
    readTime: 8,
    featured: false,
    views: 4350,
  },
  {
    id: "12",
    slug: "gen-z-workforce-expectations",
    title: "What Gen Z Really Wants from Work (And Why You Should Listen)",
    excerpt: "Gen Z is entering the workforce with radically different expectations. Companies that adapt will win the war for talent. Those that don't will lose.",
    content: `<p>By 2026, Gen Z makes up nearly 30% of the global workforce. And they're not just different from millennials — they're fundamentally reshaping workplace expectations.</p><h2>Purpose Over Paychecks</h2><p>While compensation matters, Gen Z consistently ranks purpose and impact above salary in job satisfaction surveys. They want to know how their work connects to something larger — and they can spot corporate mission-washing from a mile away.</p><h2>The End of "Paying Your Dues"</h2><p>The traditional corporate ladder, with its years of grunt work before meaningful responsibility, is deeply unappealing to a generation that grew up building businesses on TikTok. Gen Z expects autonomy, ownership, and impact from day one.</p>`,
    category: "Culture",
    categorySlug: "culture",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    author: authors[3],
    publishedAt: "2026-01-28",
    readTime: 6,
    featured: false,
    views: 8450,
  },
  {
    id: "13",
    slug: "cybersecurity-board-level-concern",
    title: "Cybersecurity as a Board-Level Concern: What Directors Need to Know",
    excerpt: "Cybersecurity is no longer an IT problem — it's a business risk that demands board-level attention and governance.",
    content: `<p>In 2025, the average cost of a data breach hit $5.2 million. More importantly, the reputational damage from a breach can cost companies billions in market capitalization. Cybersecurity has definitively moved from the server room to the boardroom.</p><h2>The Board's Role</h2><p>Boards don't need to understand the technical details of zero-day exploits or SQL injection attacks. They need to understand risk exposure, incident response capabilities, and cyber insurance adequacy.</p>`,
    category: "Business",
    categorySlug: "business",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    author: authors[0],
    publishedAt: "2026-01-25",
    readTime: 7,
    featured: false,
    views: 5690,
  },
  {
    id: "14",
    slug: "product-led-growth-playbook",
    title: "The Product-Led Growth Playbook: How to Let Your Product Do the Selling",
    excerpt: "PLG is more than a buzzword. Companies like Slack, Notion, and Figma have proven that letting users experience value before asking for money is a winning strategy.",
    content: `<p>Product-led growth (PLG) has gone from a niche strategy to the dominant go-to-market approach for B2B SaaS. But implementing it successfully requires more than just adding a free tier to your pricing page.</p><h2>The PLG Flywheel</h2><p>Successful PLG companies create a virtuous cycle: users discover the product, experience value quickly, share it with colleagues, and eventually convert to paid plans. Each step reinforces the next.</p><h2>Time to Value Is Everything</h2><p>The single most important metric in PLG is Time to Value (TTV) — how quickly can a new user experience the core value proposition? Slack achieved this by making the product useful from the very first message. Notion nailed it with beautiful templates that users could customize immediately.</p>`,
    category: "Innovation",
    categorySlug: "innovation",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    author: authors[2],
    publishedAt: "2026-01-22",
    readTime: 9,
    featured: false,
    views: 7120,
  },
  {
    id: "15",
    slug: "emotional-intelligence-leadership",
    title: "Why Emotional Intelligence Is the Most Underrated Leadership Skill",
    excerpt: "Technical skills get you hired. Emotional intelligence gets you promoted. And in 2026, it might be the most important competitive advantage a leader can have.",
    content: `<p>In a world increasingly dominated by AI and automation, the most valuable human skills are becoming more, not less, important. Chief among them: emotional intelligence.</p><h2>The EQ Advantage</h2><p>Research from TalentSmart found that emotional intelligence is the strongest predictor of performance, explaining 58% of success across all job types. Leaders with high EQ create teams with higher engagement, lower turnover, and better results.</p><h2>The Four Pillars</h2><p>Emotional intelligence comprises four key capabilities: self-awareness (understanding your own emotions), self-management (controlling your reactions), social awareness (reading others' emotions), and relationship management (using emotional understanding to build connections).</p>`,
    category: "Leadership",
    categorySlug: "leadership",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    author: authors[3],
    publishedAt: "2026-01-20",
    readTime: 6,
    featured: false,
    views: 9340,
  },
  {
    id: "16",
    slug: "edge-computing-enterprise",
    title: "Edge Computing: Why Processing Data Closer to the Source Changes Everything",
    excerpt: "As IoT devices proliferate and latency requirements tighten, edge computing is becoming essential infrastructure for modern enterprises.",
    content: `<p>The cloud was supposed to be the answer to everything. But as the volume of data generated at the edge of networks explodes, sending everything to centralized data centers is becoming impractical, expensive, and sometimes impossible.</p><h2>The Latency Problem</h2><p>For autonomous vehicles, industrial robotics, and real-time fraud detection, even milliseconds of latency can be catastrophic. Edge computing solves this by processing data close to where it's generated, reducing round-trip times from hundreds of milliseconds to single digits.</p>`,
    category: "Technology",
    categorySlug: "technology",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    author: authors[2],
    publishedAt: "2026-01-18",
    readTime: 8,
    featured: false,
    views: 4560,
  },
  {
    id: "17",
    slug: "circular-economy-business-model",
    title: "The Circular Economy: How Waste Is Becoming the Next Revenue Stream",
    excerpt: "Forward-thinking companies are discovering that what they used to throw away is actually their next business opportunity.",
    content: `<p>The linear "take-make-dispose" model that has driven the global economy for centuries is reaching its limits. Resource scarcity, waste regulations, and consumer demand for sustainability are forcing companies to rethink their relationship with materials.</p><h2>From Waste to Revenue</h2><p>IKEA now generates significant revenue from its furniture take-back and resale programs. Apple recovers precious metals from recycled devices. And companies like TerraCycle have built entire businesses around turning "unrecyclable" waste into new products.</p>`,
    category: "Strategy",
    categorySlug: "strategy",
    coverImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop",
    author: authors[4],
    publishedAt: "2026-01-15",
    readTime: 7,
    featured: false,
    views: 3890,
  },
  {
    id: "18",
    slug: "four-day-work-week-results",
    title: "The 4-Day Work Week: What the Data Actually Shows After Two Years",
    excerpt: "We now have enough data from large-scale 4-day work week experiments to draw real conclusions. The results might surprise you.",
    content: `<p>What started as a radical experiment has become a genuine movement. Over 200 companies across 6 countries have now permanently adopted a 4-day work week, and the results are in.</p><h2>The Numbers Don't Lie</h2><p>According to the largest study to date, conducted by researchers at Cambridge University: revenue increased by an average of 35%, employee turnover dropped by 57%, and sick days decreased by 65%. Perhaps most surprisingly, productivity per hour worked actually increased by 22%.</p><h2>Not One Size Fits All</h2><p>The companies that struggled with the transition share common traits: they reduced hours without rethinking processes, they applied the policy rigidly across roles with different needs, or they maintained meeting cultures that ate into productive time.</p>`,
    category: "Culture",
    categorySlug: "culture",
    coverImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop",
    author: authors[1],
    publishedAt: "2026-01-12",
    readTime: 6,
    featured: false,
    views: 15200,
  },
];

// Helper functions
export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const getPostsByCategory = (categorySlug: string): Post[] =>
  posts.filter((p) => p.categorySlug === categorySlug);

export const getFeaturedPost = (): Post =>
  posts.find((p) => p.featured) || posts[0];

export const getTrendingPosts = (count: number = 5): Post[] =>
  [...posts].sort((a, b) => b.views - a.views).slice(0, count);

export const getRelatedPosts = (post: Post, count: number = 3): Post[] =>
  posts
    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, count);

export const getPostsByAuthor = (authorId: string): Post[] =>
  posts.filter((p) => p.author.id === authorId);

export const getAuthorById = (authorId: string): Author | undefined =>
  authors.find((a) => a.id === authorId);

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const searchPosts = (query: string): Post[] => {
  const q = query.toLowerCase();
  return posts.filter(
    (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
  );
};
