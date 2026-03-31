import { useEffect } from "react";

interface MetaTagsOptions {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
  authorName?: string;
  publishedAt?: string;
}

export function useMetaTags(options: MetaTagsOptions) {
  useEffect(() => {
    const {
      title,
      description,
      ogImage,
      ogType = "website",
      canonicalUrl,
      twitterCard = "summary_large_image",
      authorName,
      publishedAt,
    } = options;

    if (title) {
      document.title = `${title} — The Corporate Blog`;
    }

    const setMeta = (property: string, content: string, isOg = false) => {
      const attr = isOg ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }

    if (title) {
      setMeta("og:title", title, true);
      setMeta("twitter:title", title);
    }

    if (ogImage) {
      setMeta("og:image", ogImage, true);
      setMeta("twitter:image", ogImage);
    }

    setMeta("og:type", ogType, true);
    setMeta("twitter:card", twitterCard);

    if (authorName) setMeta("author", authorName);
    if (publishedAt) setMeta("article:published_time", publishedAt, true);

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }

    return () => {
      document.title = "The Corporate Blog — Insights for Modern Leaders";
      // Clean up canonical
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.remove();
    };
  }, [
    options.title,
    options.description,
    options.ogImage,
    options.ogType,
    options.canonicalUrl,
    options.twitterCard,
    options.authorName,
    options.publishedAt,
  ]);
}
