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
    channelid: {
        type: String,
        required: true
    }
})

const guild = mongoose.model("guild", guildSchema)
module.exports = guild