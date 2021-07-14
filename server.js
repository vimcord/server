const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Guild = require("./models/guild.js")

let dbURI = require("./config.json").dbURI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(app.listen(3000))

// A post request to create a guild
app.post("/createguild", (req, res) => {
    console.log(req.params)
    // const testguild = new Guild({
    //     name: req.params.name,
    //     id: req.params.id,
    //     channelid: req.params.channelid
    // })
    // testguild.save()
    // .then((result) => {
    //     res.send(result)
    // })
})



