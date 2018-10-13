const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Role = new Schema({
   postion: {type: String},
   pay: {type: String},
   yearsOfExp: {type: String},
   description: {type: String}
})

const RoleModel = mongoose.model('role', Role)

module.exports = RoleModel