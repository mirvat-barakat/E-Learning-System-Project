const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },

    description: {
        type:String,
        required:true,
    },

})
const User = mongoose.model("Course", courseSchema);
module.exports = Course;