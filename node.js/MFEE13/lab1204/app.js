var express = require("express")

// 要先npm install express
var app = express()

// app.get("/user", function(req, res) {
//         res.send("user index")
//     })
// 放在 app.use(express.static("./public")) 的前面會進資料夾


// var webRoot = __dirname + "/public"
// __dirname 當前路徑位置
// console.log(__dirname);

app.use(express.static("./public"))
    // 連結路徑 要有相對應名稱的資料夾

// app.use("/member", memberRouter)
// memberRouter 是路由器


app.set("view engine", "ejs")
    //ejs 固定到views資料夾拿東西

app.listen(3000)


app.get("/test", function(req, res) {
    res.render("test.ejs", {
        //要給東西的檔名 只能找一層
        // 要往下 資料夾名 / 檔名.ejs 
        userName: "Gin",
        twoLines: "line1<br>line2",
        imageFileName: "/img/slide1.jpeg",
        dataList: [100, 50, 80, 90]

    })

})