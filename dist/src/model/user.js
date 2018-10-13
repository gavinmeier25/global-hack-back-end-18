'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: { type: String, unique: true },
    password: { type: String }
});

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;