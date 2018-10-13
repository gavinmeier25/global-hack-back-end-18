'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Role = new Schema({
   postion: { type: String },
   pay: { type: String },
   yearsOfExp: { type: String },
   description: { type: String }
});

var RoleModel = mongoose.model('role', Role);

module.exports = RoleModel;