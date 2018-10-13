'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Company = new Schema({
    companyName: { type: String },
    contactInfo: { type: Schema.Types.ObjectId, ref: 'contactInfo' },
    companyContacts: [{ type: Schema.Types.ObjectId, ref: 'companyUser' }],
    address: { type: Schema.Types.ObjectId, ref: 'address' }
});

var CompanyModel = mongoose.model('company', Company);

module.exports = CompanyModel;