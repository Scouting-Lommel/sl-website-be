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
  "netlify-deployments": {
    enabled: true,
    config: {
      buildHook: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_BUILD_HOOK,
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      siteId: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_SITE_ID,
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
