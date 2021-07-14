const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Guild = require("./models/guild.js")

let dbURI = require("./config.json").dbURI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(app.listen(3000))

// A post request to create a guild
// requires a name and id param
app.post("/createguild", (req, res) => {
    const createdguild = new Guild({
        name: req.query.name,
        id: req.query.id,
    })
    createdguild.save()
    .then((result) => {
        res.send(result)
    })
})

// A get request to get a guild
app.get("/:guildid/get", (req, res) => {
    Guild.find({ id: req.params.guildid }, (err, data) => {
        res.send(data)
    })
})



