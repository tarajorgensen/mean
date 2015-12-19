'use strict';

/**
 * Module dependencies.
 */
var childrenPolicy = require('../policies/children.server.policy.js'),
  children = require('../controllers/children.server.controller.js');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/children').all(childrenPolicy.isAllowed)
    .get(children.list)
    .post(children.create);

  // Single child routes
  app.route('/api/children/:childId').all(childrenPolicy.isAllowed)
    .get(children.read)
    .put(children.update)
    .delete(children.delete);

  // Finish by binding the child middleware
  app.param('childId', children.childByID);
};
