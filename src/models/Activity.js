const mongoose = require('mongoose'),
Schema = mongoose.Schema,
ActivitySchema = new Schema({
    author: {type:String, required:true},
    timestamp: {type:Date, requried:true},
    description: {type:String, required:true},
    status: {type:String, required:true},
    repeat: {
        daily: {type:Boolean}
    }
})

const Activity = module.exports = mongoose.model('Activity', ActivitySchema)