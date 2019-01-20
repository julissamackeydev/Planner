const mongoose = require('mongoose'),
Schema = mongoose.Schema,
Activity = new Schema({
    author: String,
    timestamp: Date,
    description: String,
    status: ""|

})