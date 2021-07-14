const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Guild = require("./models/guild.js")

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(app.listen(3000))


app.get("/createguild", (req, res) => {
    const testguild = new Guild({
        name: "test",
        id: "1",
        channels: ["ok"]
    })
    testguild.save()
    .then((result) => {
        res.send(result)
    })
})



