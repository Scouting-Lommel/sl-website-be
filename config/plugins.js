module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  publisher: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
        policy_section: {
          field: "slug",
          references: "title",
        },
        page_meta: {
          field: "slug",
          references: "pageTitle",
        },
      },
    },
  },
  "google-maps": {
    enabled: true,
  },
  "strapi-blurhash-plugin": {
    enabled: true,
    config: {
      regenerateOnUpdate: true,
    },
  },
});
