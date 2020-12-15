var express = require("express")
var app = express()
app.listen(3000)
app.set("view engine", "ejs")
app.use(express.static("./public"))


var bp = require("body-parser")
app.use(bp.urlencoded())

var session = require("express-session")
app.use(session({ secret: "p@assw0rd" }))

app.get("/", function(req, res) {
    var userName = req.session.userName || "Guest"
    res.render("index", { who: userName })
})

app.get("/member/login", function(req, res) {
    res.render("login", { who: "" })
})
app.get("/member/logout", function(req, res) {
    // req.session.userName=""
    delete req.session.userName
    res.redirect("/")
})

app.post("/member/login", function(req, res) {
    var userName = req.body.txtID
    if (userName == "derek") {
        req.session.userName = userName
        res.redirect("/")
    } else {
        res.render("login", { who: userName })
    }
})

app.get("/member/secret", function(req, res) {
    var userName = req.session.userName || "Guest"
    if (userName == "Guest") {
        res.redirect("/member/login")
        return
    }
    res.render("member", { who: userName })


})