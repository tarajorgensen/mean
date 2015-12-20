'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Child Schema
 */
var ChildSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true
  },
  firstName: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
  },
  lastName: {
    type: String,
    default: '',
    trim: true,
    required: 'Last Name cannot be blank'
  },
  weight: {
    type: String,
    default: '',
    trim: true,
    required: 'weight cannot be blank'
  },
  height: {
    type: String,
    default: '',
    trim: true,
    required: 'height cannot be blank'
  },
  birthdate: {
    type: String,
    default: '',
    required: 'birthdate cannot be blank'
  },
  comments: {
    type: String,
    default: '',
    trim: true
  },
  father: {
    type: String,
    default: '',
    trim: true
  },
  mother: {
    type: String,
    default: '',
    trim: true
  },
  branch: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Child', ChildSchema);
