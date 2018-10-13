const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactInfo = new Schema({
    email: { type: String, unique: true },
    lastName: { type: String},
    firstName: { type: String},
    phoneNumber: { type: Number},
})

const ContactInfoModel = mongoose.model('contactInfo', ContactInfo)

module.exports = ContactInfoModel