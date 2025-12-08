import * as React from "react"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  pathname?: string
  article?: boolean
  noindex?: boolean
  keywords?: string[]
  children?: React.ReactNode
}

// Site metadata - modify these values to update SEO across the site
const siteMetadata = {
  title: "Taxes 2 Go - Tax Preparation & Accounting Services Orlando FL",
  titleTemplate: "%s | Taxes 2 Go",
  description: "Professional tax preparation services in Orlando, FL. Enrolled Agent with 23+ years experience. Individual, S-Corp, LLC tax returns. Bilingual tax services (English/Spanish). Call 407-719-9599.",
  siteUrl: "https://taxes2gofl.com/",
  image: "/og-image.png",
  twitterUsername: "",
  author: "Taxes 2 Go - Edwin Venezuela, EA, MSCTA",
  lang: "en",
  locale: "en_US",
  phone: "407-719-9599",
  whatsapp: "407-719-9599",
  email: "info@taxes2gofl.com",
  address: {
    street: "5769 Curry Ford Road",
    city: "Orlando",
    state: "FL",
    zip: "32822",
    country: "United States"
  },
  geo: {
    latitude: 28.5383,
    longitude: -81.3792
  },
  social: {
    facebook: "https://www.facebook.com/Taxes2go",
    instagram: "https://www.instagram.com/taxes.2.go.orlando/",
    linkedin: "https://www.linkedin.com/in/taxes2go/",
    youtube: "https://www.youtube.com/@taxes2go257",
    tiktok: "https://www.tiktok.com/@taxes2go"
  },
  keywords: [
    "tax preparation Orlando",
    "tax services Orlando FL",
    "Enrolled Agent Orlando",
    "tax preparer Orlando",
    "IRS enrolled agent",
    "tax accountant Orlando",
    "individual tax return Orlando",
    "S-Corp tax return",
    "LLC tax return",
    "business tax preparation",
    "tax planning Orlando",
    "tax advisor Florida",
    "bilingual tax services",
    "Spanish tax preparer Orlando",
    "tax services near me",
    "Orlando tax professional",
    "Florida tax services",
    "tax compliance Orlando",
    "small business tax services",
    "self-employed tax return",
    "rental property tax return",
    "tax strategy Orlando",
    "Edwin Venezuela EA",
    "MSCTA tax advisor",
    "taxes2go",
    "taxes 2 go Orlando"
  ]
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  pathname = "",
  article = false,
  noindex = false,
  keywords = [],
  children
}) => {
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
    keywords: [...siteMetadata.keywords, ...keywords].join(", ")
  }

  const fullTitle = title 
    ? siteMetadata.titleTemplate.replace("%s", title)
    : siteMetadata.title

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${siteMetadata.siteUrl}/#business`,
    name: "Taxes 2 Go",
    alternateName: "Taxes 2 Go LLC",
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    telephone: siteMetadata.phone,
    email: siteMetadata.email,
    image: seo.image,
    logo: `${siteMetadata.siteUrl}/logo.png`,
    priceRange: "$$",
    foundingDate: "2001",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "2-10"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.city,
      addressRegion: siteMetadata.address.state,
      postalCode: siteMetadata.address.zip,
      addressCountry: siteMetadata.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteMetadata.geo.latitude,
      longitude: siteMetadata.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }
    ],
    sameAs: [
      siteMetadata.social.facebook,
      siteMetadata.social.instagram,
      siteMetadata.social.linkedin,
      siteMetadata.social.youtube,
      siteMetadata.social.tiktok
    ].filter(Boolean),
    areaServed: {
      "@type": "City",
      name: siteMetadata.address.city,
      "@id": `${siteMetadata.siteUrl}/#city`
    },
    serviceType: [
      "Tax Preparation",
      "Tax Planning",
      "Tax Consulting",
      "Accounting Services",
      "Business Tax Services",
      "Individual Tax Services"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Individual Federal Tax Return",
            description: "Professional individual tax return preparation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "S-Corp Tax Returns",
            description: "S-Corporation tax return preparation and filing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LLC Tax Returns",
            description: "LLC tax return preparation and filing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tax Planning",
            description: "Strategic tax planning for individuals and businesses"
          }
        }
      ]
    }
  }

  // Person Schema for Edwin Venezuela
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteMetadata.siteUrl}/#person`,
    name: "Edwin Venezuela",
    jobTitle: "Enrolled Agent, MSCTA, CEO",
    worksFor: {
      "@id": `${siteMetadata.siteUrl}/#organization`
    },
    email: siteMetadata.email,
    telephone: siteMetadata.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMetadata.address.street,
      addressLocality: siteMetadata.address.city,
      addressRegion: siteMetadata.address.state,
      postalCode: siteMetadata.address.zip,
      addressCountry: siteMetadata.address.country
    },
    knowsAbout: [
      "Tax Preparation",
      "Tax Planning",
      "IRS Compliance",
      "Business Tax Strategy",
      "Individual Tax Returns",
      "Corporate Tax Returns"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IRS Enrolled Agent"
    }
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteMetadata.siteUrl}/#website`,
    url: siteMetadata.siteUrl,
    name: siteMetadata.title,
    description: siteMetadata.description,
    publisher: {
      "@id": `${siteMetadata.siteUrl}/#organization`
    },
    inLanguage: siteMetadata.lang
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteMetadata.siteUrl}/#organization`,
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteMetadata.siteUrl}/logo.png`,
      width: 512,
      height: 512
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteMetadata.phone,
      contactType: "customer service",
      areaServed: siteMetadata.address.state,
      availableLanguage: ["Spanish", "English"]
    },
    sameAs: [
      siteMetadata.social.facebook,
      siteMetadata.social.instagram,
      siteMetadata.social.linkedin,
      siteMetadata.social.youtube,
      siteMetadata.social.tiktok
    ].filter(Boolean)
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteMetadata.siteUrl
      },
      ...(pathname && pathname !== "/" ? [{
        "@type": "ListItem",
        position: 2,
        name: title || "Página",
        item: seo.url
      }] : [])
    ]
  }

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={siteMetadata.author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={seo.url} />
      <html lang={siteMetadata.lang} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:site_name" content="Taxes 2 Go" />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:phone_number" content={siteMetadata.phone} />
      <meta property="og:street_address" content={siteMetadata.address.street} />
      <meta property="og:locality" content={siteMetadata.address.city} />
      <meta property="og:region" content={siteMetadata.address.state} />
      <meta property="og:postal_code" content={siteMetadata.address.zip} />
      <meta property="og:country_name" content={siteMetadata.address.country} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {siteMetadata.twitterUsername && (
        <>
          <meta name="twitter:site" content={siteMetadata.twitterUsername} />
          <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
        </>
      )}

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content={`US-${siteMetadata.address.state}`} />
      <meta name="geo.placename" content={`${siteMetadata.address.city}, ${siteMetadata.address.state}, ${siteMetadata.address.country}`} />
      <meta name="geo.position" content={`${siteMetadata.geo.latitude};${siteMetadata.geo.longitude}`} />
      <meta name="ICBM" content={`${siteMetadata.geo.latitude}, ${siteMetadata.geo.longitude}`} />
      <meta name="theme-color" content="#DC2626" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content={siteMetadata.title} />
      <meta name="msapplication-TileColor" content="#DC2626" />
      
      {/* Business Information */}
      <meta name="contact" content={siteMetadata.email} />
      <meta name="reply-to" content={siteMetadata.email} />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Language and Localization */}
      <meta httpEquiv="content-language" content="en, es" />
      <link rel="alternate" hrefLang="en" href={`${siteMetadata.siteUrl}${pathname}`} />
      <link rel="alternate" hrefLang="es" href={`${siteMetadata.siteUrl}/es${pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteMetadata.siteUrl}${pathname}`} />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gloock&family=Geist:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {children}
    </>
  )
}

export default SEO

