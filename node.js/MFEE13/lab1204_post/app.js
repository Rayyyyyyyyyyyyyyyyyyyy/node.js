var express = require("express")
var bp = require("body-parser")
var app = express()
app.use(express.static("./public"))
app.use(bp.json())
app.use(bp.urlencoded())
app.listen(3000)

app.post("/test3", function(req, res) {
    // res.send("OK")
    res.send("Hello " + req.body.userName)
})