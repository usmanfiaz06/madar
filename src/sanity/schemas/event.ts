/**
 * Sanity schema: Event
 *
 * Ready to use once Sanity is configured.
 * Install @sanity/client and configure your project ID/dataset.
 */
export const eventSchema = {
  name: "event",
  title: "Event",
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
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
    },
    { name: "date", title: "Date", type: "datetime" },
    {
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "string" },
        { name: "ar", title: "Arabic", type: "string" },
      ],
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
    { name: "attendeeCount", title: "Attendee Count", type: "number" },
    { name: "image", title: "Cover Image", type: "image", options: { hotspot: true } },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Upcoming", value: "upcoming" },
          { title: "Past", value: "past" },
        ],
      },
    },
  ],
};
