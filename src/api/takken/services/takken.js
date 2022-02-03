'use strict';

/**
 * takken service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::takken.takken');
