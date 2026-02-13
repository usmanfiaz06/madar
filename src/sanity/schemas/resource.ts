/**
 * Sanity schema: Resource (White Papers, Reports, Frameworks)
 */
export const resourceSchema = {
  name: "resource",
  title: "Resource",
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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "White Paper", value: "whitepaper" },
          { title: "Report", value: "report" },
          { title: "Framework", value: "framework" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "text" },
        { name: "ar", title: "Arabic", type: "text" },
      ],
    },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "file", title: "PDF File", type: "file", options: { accept: ".pdf" } },
    { name: "pageCount", title: "Page Count", type: "number" },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
  ],
};
