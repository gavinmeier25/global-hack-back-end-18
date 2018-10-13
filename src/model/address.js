const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Address = new Schema({
    streetAddress: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: String}
})

const AddressModel = mongoose.model('address', Address)

module.exports = AddressModel