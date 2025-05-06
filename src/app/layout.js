import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Using Poppins as a substitute for Satoshi
const satoshi = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Sereno | Enterprise AI Solutions for Indian Businesses",
  description: "Sereno delivers custom enterprise AI solutions using LLMs and computer vision to transform business operations for India's largest organizations. Specializing in manufacturing, financial services, healthcare, and retail sectors.",
  keywords: "enterprise AI, large language models, computer vision, business intelligence, AI implementation, data analytics, machine learning, India AI solutions, custom AI, enterprise technology, AI consulting, computer vision solutions, generative AI, RAG, knowledge graphs, GPU infrastructure",
  robots: "index, follow",
  openGraph: {
    title: "Sereno | Enterprise AI Solutions for Indian Businesses",
    description: "Custom enterprise AI solutions that deliver measurable results for India's largest organizations across finance, manufacturing, healthcare, and retail sectors.",
    url: "https://www.serenovolante.com",
    siteName: "Sereno",
    images: [
      {
        url: "favicon.svg",
        width: 1200,
        height: 630,
        alt: "Sereno - Enterprise AI Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sereno | Enterprise AI Solutions for Indian Businesses",
    description: "Custom enterprise AI solutions that deliver measurable results for India's largest organizations across finance, manufacturing, healthcare, and retail sectors.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.serenovolante.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.cdnfonts.com/css/satoshi" 
          rel="stylesheet"
        />
        {/* Schema.org JSON-LD for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sereno",
              "url": "https://www.serenovolante.com",
              "logo": "/favicon.svg",
              "sameAs": [
                "https://twitter.com/sereno_ai",
                "https://www.linkedin.com/company/sereno-ai"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "description": "Enterprise AI solutions provider specializing in custom LLM and vision AI applications for businesses across India.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${satoshi.variable} bg-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
