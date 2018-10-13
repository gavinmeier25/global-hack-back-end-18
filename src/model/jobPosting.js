const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobPosting = new Schema({
    comapny: {type: Schema.Types.ObjectId, ref: 'company'},
    role: {type: Schema.Types.ObjectId, ref: 'role'},
})

const JobPostingModel = mongoose.model('jobPosting', JobPosting)

module.exports = JobPostingModel