export function generateMetadata({
  title,
  description,
  image = "/assets/images/og-default.jpg",
  url,
  type = "website",
  keywords,
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  keywords?: string[];
}) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  return {
    title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: `${description}`,
    icons: {
      icon: "/favicon.ico",
    },
    keywords: keywords,
    openGraph: {
      title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      description,
      url: url ?? `${base}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: image.startsWith("http") ? image : `${base}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "id_ID",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      description,
      images: [image.startsWith("http") ? image : `${base}${image}`],
    },
  };
}
