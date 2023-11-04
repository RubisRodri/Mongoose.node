const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
            type: String
        },
    },
    {
        timestamps: true,// todo create add, update add
        versionKey: false
    }
)

module.exports = mongoose.model("storages", StorageScheme)