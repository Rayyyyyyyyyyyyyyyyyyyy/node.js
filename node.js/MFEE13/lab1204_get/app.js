var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(express.static("./public"))
app.listen(3000)
    //http://localhost/test?id=3
app.get("/test", function(req, res) {

    res.send(req.query.id)

})