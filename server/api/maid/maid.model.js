'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MaidSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  gender: String,
  experience: String,
  phone1: String,
  phone2: String,
  location: String,
  marital_status: String,
  price_per_person: Number,
  price_avg: Number,
  meal_type: String,
  cleaning: String,
  language: String,
  home_town: String,
  address1: String,
  address2: String,
  education: String,
  role: String,
  status: String,
  active: String,
  state: String,
  city: String,
});

module.exports = mongoose.model('Maid', MaidSchema);
