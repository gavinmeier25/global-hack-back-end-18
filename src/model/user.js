const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: { type: String, unique: true },
    password: { type: String }
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel