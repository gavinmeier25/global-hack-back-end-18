'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobPosting = new Schema({
    comapny: { type: Schema.Types.ObjectId, ref: 'company' },
    role: { type: Schema.Types.ObjectId, ref: 'role' }
});

var JobPostingModel = mongoose.model('jobPosting', JobPosting);

module.exports = JobPostingModel;