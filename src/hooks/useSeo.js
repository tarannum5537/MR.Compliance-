import { useEffect } from "react";

/**
 * Simple SEO helper.
 *
 * Sets the page title, meta description, canonical URL and the basic
 * Open Graph / Twitter tags. Call it once at the top of a page component:
 *
 *   useSeo({ title: "...", description: "...", path: "/about-us/" });
 */

const SITE_URL = "https://www.mrcompliance.co";

function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function useSeo({ title, description, path = "/" }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) document.title = title;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    if (title) {
      setMeta("property", "og:title", title);
      setMeta("name", "twitter:title", title);
    }
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);
}
