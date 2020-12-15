var express = require("express")
var app = express()
app.use(express.static("./public"))

app.listen(3000)

var bp = require("body-parser")
app.use(bp.json())
app.use(bp.urlencoded())

app.post("/member/login", function(req, res) {
    if (req.body.userName == "derek") {
        res.send(req.body.userName)

    } else {
        res.send("Guest")
    }
})