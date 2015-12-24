'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Child = mongoose.model('Child'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a child
 */
exports.create = function(req, res) {
  var child = new Child(req.body);
  child.firstName = req.body.firstName;
  child.lastName = req.body.lastName;
  child.user = req.user;

  child.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(child);
    }
  });
};

/**
 * Show the current child
 */
exports.read = function(req, res) {
  res.json(req.child);
};

/**
 * Update a child
 */
exports.update = function(req, res) {
  var child = req.child;

  child.firstName = req.body.firstName;
  child.lastName = req.body.lastName;
  child.content = req.body.content;

  child.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(child);
    }
  });
};

/**
 * Delete an child
 */
exports.delete = function (req, res) {
  var child = req.child;

  child.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(child);
    }
  });
};

/**
 * List of Children
 */
exports.list = function (req, res) {
  Child.find().sort('-created').populate('user', 'displayName').exec(function (err, childs) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(childs);
    }
  });
};

/**
 * Child middleware
 */
exports.childByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Child is invalid'
    });
  }

  Child.findById(id).populate('user', 'displayName').exec(function (err, child) {
    if (err) {
      return next(err);
    } else if (!child) {
      return res.status(404).send({
        message: 'No child with that identifier has been found'
      });
    }
    req.child = child;
    next();
  });
};
