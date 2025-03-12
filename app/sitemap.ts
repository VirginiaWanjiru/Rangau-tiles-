import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://rangautiles.com/", lastModified: new Date() },
    { url: "https://rangautiles.com/about", lastModified: new Date() },
    { url: "https://rangautiles.com/sanitaryware", lastModified: new Date() },
    { url: "https://rangautiles.com/contactus", lastModified: new Date() },
  ];
}
