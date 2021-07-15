const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    guildid: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
})

const Message = mongoose.model("Message", messageSchema)
module.exports = Message 