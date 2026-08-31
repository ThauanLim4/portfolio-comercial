export default function sitemap() {
  const origin = "https://thauan.dev";
  return [
    {
      url: origin,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
