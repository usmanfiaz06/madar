/**
 * Sanity schema: Insight (Blog/Article)
 */
export const insightSchema = {
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "string" },
        { name: "ar", title: "Arabic", type: "string" },
      ],
    },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title.en", maxLength: 96 } },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "text" },
        { name: "ar", title: "Arabic", type: "text" },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "array", of: [{ type: "block" }] },
        { name: "ar", title: "Arabic", type: "array", of: [{ type: "block" }] },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Governance", value: "governance" },
          { title: "Design", value: "design" },
          { title: "Culture", value: "culture" },
          { title: "Trust", value: "trust" },
          { title: "Technology", value: "technology" },
        ],
      },
    },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "readTime", title: "Read Time (minutes)", type: "number" },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
  ],
};
