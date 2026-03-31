interface JsonLdProps {
  data: Record<string, any>;
}

const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const ArticleJsonLd = ({
  title,
  description,
  url,
  imageUrl,
  publishedAt,
  authorName,
  authorUrl,
}: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  authorName: string;
  authorUrl?: string;
}) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url,
      image: imageUrl,
      datePublished: publishedAt,
      author: {
        "@type": "Person",
        name: authorName,
        ...(authorUrl ? { url: authorUrl } : {}),
      },
      publisher: {
        "@type": "Organization",
        name: "The Corporate Blog",
        logo: {
          "@type": "ImageObject",
          url: `${window.location.origin}/favicon.ico`,
        },
      },
    }}
  />
);

export const BreadcrumbJsonLd = ({
  items,
}: {
  items: { name: string; url: string }[];
}) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    }}
  />
);

export const OrganizationJsonLd = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "The Corporate Blog",
      url: window.location.origin,
      logo: `${window.location.origin}/favicon.ico`,
      sameAs: [],
    }}
  />
);

export const FaqJsonLd = ({
  items,
}: {
  items: { question: string; answer: string }[];
}) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }}
  />
);

export default JsonLd;
