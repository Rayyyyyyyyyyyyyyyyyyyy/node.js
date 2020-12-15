var express = require("express")
var app = express()
app.set("view engine", "ejs")
app.listen(3000)

var bp = require("body-parser")
app.use(bp.urlencoded())

var session = require("express-session")
app.use(session({ secret: "P@ssw0rd" }))


app.get("/", function(req, res) {
    res.render("index")
})


// 有得到要求 "/" 就跑function (req,res){
// res.send("")
// 回應內容印到前台
// }


// app.set("view engine", "ejs")
// 先設定
// res.render("ejs 檔名")
// 創 然後放viwes資料夾


app.post("/", function(req, res) {
    req.session.userName = req.body.userName
        //session 快取資料 要先install express-session
        //引用 require("express-session")
        //要use app.use(session({ secret: "P@ssw0rd" 至少要有secret}))

    res.redirect("/welcome")
        //redirect 這是網頁跳轉
})
app.get("/welcome", function(req, res) {
    res.send("Hello! " + req.body.userName)
})