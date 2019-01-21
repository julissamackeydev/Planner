const mongoose = require('mongoose'),
Schema = mongoose.Schema,
GoalSchema = new Schema({
    description: {type:String, required:true},
    skills_needed: [String],
    hours_dedicated:{type:Number, required:true},
    status: {type:String, required:true}
}, {timestamps: true})

mongoose.model('Goal', GoalSchema)