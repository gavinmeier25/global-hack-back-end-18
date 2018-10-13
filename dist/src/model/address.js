'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Address = new Schema({
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String }
});

var AddressModel = mongoose.model('address', Address);

module.exports = AddressModel;