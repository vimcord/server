const mongoose = require("mongoose")
const Schema = mongoose.Schema

const guildSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    messages: Array
})

const guild = mongoose.model("guild", guildSchema)
module.exports = guild