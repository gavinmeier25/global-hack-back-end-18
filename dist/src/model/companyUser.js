'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanyUser = new Schema({
    company: { type: Schema.Types.ObjectId, ref: 'company' },
    contactInfo: { type: Schema.Types.ObjectId, ref: 'contactInfo' },
    user: { type: Schema.Types.ObjectId, ref: 'user', unique: true }
});

var CompanyUserModel = mongoose.model('companyUser', CompanyUser);

module.exports = CompanyUserModel;