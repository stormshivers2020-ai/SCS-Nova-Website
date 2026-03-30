import { SITE_DESCRIPTION, SITE_TITLE, siteMetadataBase } from "@/data/siteMeta";

/** Organization schema — reinforces legitimacy in search without visible UI change. */
export function OrganizationJsonLd() {
  const base = siteMetadataBase().origin;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SCS Nova",
    alternateName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: base,
    logo: `${base}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "16A Belair South Parkway",
      addressLocality: "Bel Air",
      addressRegion: "MD",
      postalCode: "21015",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
