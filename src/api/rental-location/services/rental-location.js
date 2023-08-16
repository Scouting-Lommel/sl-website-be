'use strict';

/**
 * rental-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-location.rental-location');
