const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanyUser = new Schema({
    company: {type: Schema.Types.ObjectId, ref: 'company'},
    contactInfo: { type: Schema.Types.ObjectId, ref: 'contactInfo'},
    user: {type: Schema.Types.ObjectId, ref: 'user', unique: true}
})

const CompanyUserModel = mongoose.model('companyUser', CompanyUser)

module.exports = CompanyUserModel