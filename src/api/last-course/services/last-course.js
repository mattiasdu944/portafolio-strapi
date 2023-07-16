'use strict';

/**
 * last-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-course.last-course');
