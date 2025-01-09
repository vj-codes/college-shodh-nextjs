"use client";
import Head from "next/head";
import { seoData, IMAGE_URLS } from "../data/SeoData";
import { usePathname } from "next/navigation";
// import type { Metadata } from 'next'

const Seo = ({ page, customData }) => {
  const pathname = usePathname();

  // Default SEO data fallback
  const defaultSeo = {
    title: "Default Title | College Shodh",
    description: "Default description for College Shodh.",
    image: IMAGE_URLS.logo,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "College Shodh",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
      logo: IMAGE_URLS.logo,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-800-123-4567",
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: "English",
      },
    },
  };

  // Attempt to get custom SEO data first, if available
  let pageSeo = customData || seoData[page];
// console.log("pageSeo",pageSeo)
// console.log("customData",customData)
// console.log("seoData[page]", seoData[page]);
  // If no custom data or page-specific data found, use the path-based SEO data
  if (!pageSeo && pathname) {
       console.log("!pageSeo && pathname");
    pageSeo = {
      title: `Page for ${pathname} | College Shodh`,
      description: `Learn more about ${pathname} on College Shodh.`,
      image: IMAGE_URLS.logo,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${pathname} | College Shodh`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
        logo: IMAGE_URLS.logo,
      },
    };
  }

  // If no SEO data is available (custom or path-based), fallback to default
  if (!pageSeo) {
    console.log("!pageSeo")
    pageSeo = defaultSeo;
  }

  // Destructure and fallback to defaults if any property is missing
  const {
    title = defaultSeo.title,
    description = defaultSeo.description,
    url = defaultSeo.url,
    image = defaultSeo.image,
    structuredData = defaultSeo.structuredData,
  } = pageSeo;
console.log("title",title)
console.log("description",description)
  // Ensure structuredData is valid JSON
  const structuredDataJson = (() => {
    try {
      return JSON.stringify(structuredData);
    } catch (error) {
      console.error("Error parsing structured data:", error);
      return JSON.stringify(defaultSeo.structuredData); // Fallback to default structured data
    }
  })();

  return (
    <Head>
     
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{structuredDataJson}</script>
    </Head>
  );
};

export default Seo;
