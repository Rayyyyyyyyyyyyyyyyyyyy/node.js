var express = require("express")
var app = express()

app.use(express.static("./public"))
    //搜尋根目錄 public可以自訂 但要有相對應的資料夾名稱

app.listen(80)

app.get("/hello/:who", function(req, res) {
    res.send("Hello!" + req.params.who)
        //:who 是變數 

    // res.redirect("http://www.google.com")
    //header("location:http://google.com")
})

// console.log("ok");