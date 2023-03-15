import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)