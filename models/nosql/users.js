const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        age:{
            type: Number
        },
        email:{
            type: String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["userm", "admin"],
            default:"user",
        },
    },
    {
        timestamps: true,// todo create add, update add
        versionKey: false
    }
)

module.exports = mongoose.model("users", UserScheme)