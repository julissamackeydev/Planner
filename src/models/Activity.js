const mongoose = require('mongoose')
ActivitySchema = mongoose.Schema({
    author: {type:String, required:true},
    time: {
        start:{type:String, requried:true},
        end:{type:String, requried:true}
    },
    allDay:Boolean,
    startDate:Date,
    endDate:Date,
    date: Date,
    day: String,
    description: {type:String, required:true},
    status: {type:String, required:true},
    repeat: {type:String}
})

const Activity = module.exports = mongoose.model('Activity', ActivitySchema)