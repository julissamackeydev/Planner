const mongoose = require('mongoose'),
Schema = mongoose.Schema,
ActivitySchema = new Schema({
    author: {type:String, required:true},
    time: {type:Date, requried:true},
    date: Date,
    day: String,
    description: {type:String, required:true},
    status: {type:String, required:true},
    repeat: {
        daily: {type:Boolean}
    }
})

const Activity = module.exports = mongoose.model('Activity', ActivitySchema)