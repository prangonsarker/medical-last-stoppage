import { content } from '../content';

export function applySEO() {
  const seo = (content as any).seo || {};
  const theme = (content as any).theme || {};
  const courseName = content.hero?.titleMain || (content.hero as any)?.courseName || "Medical Last Stoppage";


  const title = seo.title ? `${seo.title} | ${courseName}` : `${courseName} & Mentorship Program`;
  const description = seo.description || content.hero?.description || "Medical Admission প্রার্থীদের জন্য একটি পূর্ণাঙ্গ Mentorship Program।";
  const keywords = Array.isArray(seo.keywords) ? seo.keywords.join(", ") : (seo.keywords || "Medical, Admission, Mentorship, Bangladesh");
  const canonicalUrl = seo.canonicalUrl || "https://medicalstoppage.com";
  const ogImage = seo.openGraphImage || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600";
  const favicon = seo.favicon || theme.logo || "/favicon.ico";
  const themeColor = theme.background || "#000000";

  // 1. Document Title
  document.title = title;

  // Helper to set or create meta tag
  const setMeta = (attrName: string, attrVal: string, contentVal: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrVal);
      document.head.appendChild(element);
    }
    element.setAttribute("content", contentVal);
  };

  // Helper to set or create link tag
  const setLink = (relVal: string, hrefVal: string) => {
    let element = document.querySelector(`link[rel="${relVal}"]`);
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", relVal);
      document.head.appendChild(element);
    }
    element.setAttribute("href", hrefVal);
  };

  // Standard Meta
  setMeta("name", "description", description);
  setMeta("name", "keywords", keywords);
  setMeta("name", "theme-color", themeColor);

  // Canonical Link
  setLink("canonical", canonicalUrl);

  // Favicon
  setLink("icon", favicon);

  // Open Graph
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:image", ogImage);
  setMeta("property", "og:url", canonicalUrl);
  setMeta("property", "og:type", "website");

  // Twitter Card
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", ogImage);
}

