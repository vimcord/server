const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Guild = require("./models/guild.js")
const Message = require("./models/message.js")

let dbURI = require("./config.json").dbURI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(app.listen(3000))

// A post request to create a guild
// requires a name and id param
app.post("/createguild", (req, res) => {
    const createdguild = new Guild({
        name: req.query.name,
        id: req.query.id,
    })
    createdguild.save().catch(err => {
        if (err) res.send(err)
    })
    .then((result) => {
        res.send(result)
    })
})

// A get request to get a guild
app.get("/:guildid", (req, res) => {
    Guild.find({ id: req.params.guildid }, (err, data) => {
        if (err) return res.send(err)
        res.send(data)
    })
})

// Get messages from a guild
app.get("/:guildid/messages", (req, res) => {
    Message.find({ guildid: req.params.guildid }, (err, data) => {
        if (err) return res.send(err)
        res.send(data)
    })
})

// A post request to create a message
app.post("/:guildid/send", (req, res) => {
    const newMessage = new Message({
        guildid: req.params.guildid,
        content: req.query.content,
        author: req.query.author,
        timestamp: Date.now().toString()
    })
    newMessage.save().catch(err => {
        if (err) {
            res.send(err)
            console.log(err)
        }
    }).then(result => {
        res.send(result)
    })
})