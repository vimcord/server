const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp
})

const Message = mongoose.model("Message", messageSchema)
module.exports = Message 