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
  seo: {
    enabled: true,
  },
  publisher: {
    enabled: true,
  },
});
