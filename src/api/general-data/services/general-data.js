'use strict';

/**
 * general-data service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general-data.general-data');
