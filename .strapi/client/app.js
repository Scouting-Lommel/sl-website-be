/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import googleMaps from "@amicaldo/strapi-google-maps/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import netlifyDeployments from "strapi-plugin-netlify-deployments/strapi-admin";
import publisher from "strapi-plugin-publisher/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    "google-maps": googleMaps,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "netlify-deployments": netlifyDeployments,
    publisher: publisher,
  },
});
