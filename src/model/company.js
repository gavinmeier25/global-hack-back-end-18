const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema({
    companyName: {type: String},
    contactInfo: {type: Schema.Types.ObjectId, ref: 'contactInfo'},
    companyContacts: [{type: Schema.Types.ObjectId, ref: 'companyUser'}],
    address: {type: Schema.Types.ObjectId, ref: 'address'}
})

const CompanyModel = mongoose.model('company', Company)

module.exports = CompanyModel