'use strict';

/**
 * number-phone service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::number-phone.number-phone');
