const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.render("./index.html")

})

app.listen(5001, () => {
    console.log("Server is started")
})