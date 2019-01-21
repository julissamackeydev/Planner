const mongoose = require('mongoose')
ActivitySchema = mongoose.Schema({
    author: {type:String, required:true},
    time: {type:String, requried:true},
    date: Date,
    day: String,
    description: {type:String, required:true},
    status: {type:String, required:true},
    repeat: {type:String}
})

const Activity = module.exports = mongoose.model('Activity', ActivitySchema)