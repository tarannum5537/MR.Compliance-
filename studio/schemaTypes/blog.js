export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: "category", title: "Category", type: "string" },
    { name: "excerpt", title: "Excerpt (for card)", type: "text", rows: 3 },

    { name: "image", title: "Cover Image (Upload)", type: "image", options: { hotspot: true } },
    {
      name: "externalImageUrl",
      title: "OR External Image URL (Unsplash, etc.)",
      type: "url",
      description: "Agar image upload nahi karni, seedha URL paste karo yahan. Ye 'Cover Image' field se override kar dega.",
    },
    { name: "imageAlt", title: "Image Alt Text", type: "string" },

    
// SEO fields
{
  name: "metaTitle",
  title: "Meta Title (SEO)",
  type: "string",
  description: "Google search mein title ye dikhega. Empty chhoda to 'Title' field use hoga. 50-60 characters ideal.",
},
{
  name: "metaDescription",
  title: "Meta Description (SEO)",
  type: "text",
  rows: 3,
  description: "Google search snippet ke liye. Empty chhoda to 'Excerpt' use hoga. 150-160 characters ideal.",
},

{ name: "date", title: "Date (display text)", type: "string" },

    {
      name: "intro",
      title: "Intro Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    },

    {
      name: "content",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          title: "Text Section",
          fields: [
            { name: "heading", title: "Heading", type: "string" },
            {
              name: "id",
              title: "Section ID (auto-generated, click 'Generate')",
              type: "slug",
              options: {
                source: (doc, options) => options.parent?.heading || "",
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "blocks",
              title: "Blocks",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "paragraph",
                  title: "Paragraph",
                  fields: [{ name: "text", title: "Text", type: "text" }],
                },
                {
                  type: "object",
                  name: "list",
                  title: "List",
                  fields: [
                    {
                      name: "style",
                      title: "List Style",
                      type: "string",
                      options: {
                        list: [
                          { title: "Bullet Points", value: "bullet" },
                          { title: "Numbered", value: "number" },
                        ],
                        layout: "radio",
                      },
                      initialValue: "bullet",
                    },
                    {
                      name: "items",
                      title: "List Items",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          name: "listItem",
                          title: "List Item",
                          fields: [
                            { name: "bold", title: "Bold Start Text", type: "string" },
                            { name: "text", title: "Remaining Text", type: "string" },
                          ],
                          preview: {
                            select: { bold: "bold", text: "text" },
                            prepare({ bold, text }) {
                              return {
                                title: `${bold || ""} ${text || ""}`.trim() || "Empty item",
                              };
                            },
                          },
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: { style: "style", items: "items" },
                    prepare({ style, items }) {
                      return {
                        title: `${style === "number" ? "🔢 Numbered" : "• Bullet"} list (${items?.length || 0} items)`,
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return { title: title || "Untitled section" };
            },
          },
        },
      {
  type: "object",
  name: "tableSection",
  title: "Table Section",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    {
      name: "id",
      title: "Section ID (auto-generated, click 'Generate')",
      type: "slug",
      options: {
        source: (doc, options) => options.parent?.heading || "",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tablePosition",
      title: "Table Position",
      type: "string",
      options: {
        list: [
          { title: "Table First, Text After", value: "before" },
          { title: "Text First, Table After", value: "after" },
        ],
        layout: "radio",
      },
      initialValue: "after",
    },
    {
      name: "blocks",
      title: "Text (Paragraph / List)",
      description: "Ye text 'Table Position' setting ke hisaab se table ke pehle ya baad mein render hoga",
      type: "array",
      of: [
        {
          type: "object",
          name: "paragraph",
          title: "Paragraph",
          fields: [{ name: "text", title: "Text", type: "text" }],
          preview: {
            select: { text: "text" },
            prepare({ text }) {
              return { title: text?.slice(0, 60) || "Empty paragraph" };
            },
          },
        },
        {
          type: "object",
          name: "list",
          title: "List",
          fields: [
            {
              name: "style",
              title: "List Style",
              type: "string",
              options: {
                list: [
                  { title: "Bullet Points", value: "bullet" },
                  { title: "Numbered", value: "number" },
                ],
                layout: "radio",
              },
              initialValue: "bullet",
            },
            {
              name: "items",
              title: "List Items",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "listItem",
                  title: "List Item",
                  fields: [
                    { name: "bold", title: "Bold Start Text", type: "string" },
                    { name: "text", title: "Remaining Text", type: "string" },
                  ],
                  preview: {
                    select: { bold: "bold", text: "text" },
                    prepare({ bold, text }) {
                      return {
                        title: `${bold || ""} ${text || ""}`.trim() || "Empty item",
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: { style: "style", items: "items" },
            prepare({ style, items }) {
              return {
                title: `${style === "number" ? "🔢 Numbered" : "• Bullet"} list (${items?.length || 0} items)`,
              };
            },
          },
        },
      ],
    },
    {
      name: "headers",
      title: "Header Row",
      type: "array",
      of: [{ type: "string" }],
      description: "Column headings, e.g. Approach, Typical timeline, Who does the work",
    },
    {
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        {
          type: "object",
          name: "row",
          title: "Row",
          fields: [
            {
              name: "cells",
              title: "Cells",
              type: "array",
              of: [{ type: "text", rows: 2 }],
              description: "Ek cell = ek column ki value, header order ke hisaab se",
            },
          ],
          preview: {
            select: { cells: "cells" },
            prepare({ cells }) {
              return { title: cells?.join(" | ") || "Empty row" };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: "heading", rows: "rows", position: "tablePosition" },
    prepare({ title, rows, position }) {
      return {
        title: `📊 ${title || "Untitled table"} (${rows?.length || 0} rows, table ${position || "after"})`,
      };
    },
  },
},
      ],
    },

    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    },
  ],

  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
};