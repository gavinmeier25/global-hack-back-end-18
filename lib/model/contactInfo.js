'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactInfo = new Schema({
    email: { type: String, unique: true },
    lastName: { type: String },
    firstName: { type: String },
    phoneNumber: { type: Number }
});

var ContactInfoModel = mongoose.model('contactInfo', ContactInfo);

module.exports = ContactInfoModel;