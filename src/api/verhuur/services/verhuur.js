'use strict';

/**
 * verhuur service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verhuur.verhuur');
