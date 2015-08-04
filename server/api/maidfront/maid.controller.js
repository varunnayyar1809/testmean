/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /maid              ->  index
 * POST    /maid              ->  create
 * GET     /maid/:id          ->  show
 * PUT     /maid/:id          ->  update
 * DELETE  /maid/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Maid = require('../maid/maid.model');

// Get list of things
exports.index = function(req, res) {
  Maid.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

exports.test = function(req,res){
   return res.json(200,{'name':'varun'});
};

// Get a single thing
exports.show = function(req, res) {
  Maid.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
    //return res.json(201, req.body);
  Maid.create(req.body, function(err, maid) {
    if(err) { return handleError(res, err); }
    return res.json(201, maid);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Maid.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Maid.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
