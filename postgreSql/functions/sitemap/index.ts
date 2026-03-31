import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/xml",
};

// Initialize Neon Connection
// Make sure to set NEON_DATABASE_URL in your environment variables
const sql = postgres(Deno.env.get("DATABASE_URL")!, {
  ssl: "require", // Neon requires SSL
});

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Fetch published posts
    const posts = await sql`
      SELECT slug, published_at, updated_at 
      FROM posts 
      WHERE status = 'published' 
      ORDER BY published_at DESC
    `;

    // Fetch categories
    const categories = await sql`
      SELECT slug FROM categories
    `;

    // Determine the origin
    const referer = req.headers.get("referer");
    const origin = referer 
      ? new URL(referer).origin 
      : "https://thecorporateblog.com";

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${origin}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;

    // Build Category URLs
    for (const cat of categories) {
      xml += `
  <url>
    <loc>${origin}/category/${cat.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }

    // Build Post URLs
    for (const post of posts) {
      // Postgres returns Date objects; format to YYYY-MM-DD
      const dateObj = post.updated_at || post.published_at;
      const lastmod = dateObj ? new Date(dateObj).toISOString().split("T")[0] : "";
      
      xml += `
  <url>
    <loc>${origin}/post/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }

    xml += `
</urlset>`;

    return new Response(xml, { headers: corsHeaders });

  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
});