// console.log("Hello!");



// console.log("ver 2.1");

// var fs = require("fs");
// console.log("Starting...1");
// fs.writeFile("./hello.html",
//     "<html><body><h1>Hello!</h1></body></html>",
//     function(error) {
//         console.log("已建立檔案.");
//     }
// );
// console.log("Finish Flag.");



// console.log("ver 2.3");

// // var fs = require("fs");
// console.log("Starting...2");
// fs.writeFileSync("./world.html",
//     "<html><body><h1>Hello! World.</h1></body></html>");
// console.log("已建立檔案.");



// console.log("ver 2.5");

// // var fs = require("fs");
// console.log("Starting...3");
// var world = fs.readFileSync("./world.html");
// console.log("file content: " + world);


// console.log("ver 3.1");

// var http = require("http");
// console.log("Starting...");
// var host = "127.0.0.1";
// var port = 80;
// var server = http.createServer(function(request, response) {
//     console.log("Got a request: " + request.url);
//     response.writeHead(200, { "Content-type": "text/plain" });
//     response.end("Hello! I'm a Node.JS server.");
// });

// server.listen(port, host, function() {
//     console.log("Listening...");
// });


// console.log("ver 3.3");

// var http = require("http");
// var fs = require("fs");
// console.log("Starting...");
// var host = "127.0.0.1";
// var port = 80;
// var server = http.createServer(function(request, response) {
//     console.log("Got a request: " + request.url);
//     fs.readFile("." + request.url, function(error, data) {
//         if (error) {
//             response.writeHead(404, { "Content-type": "text/plain" });
//             response.end("File not found.");
//         } else {
//             response.writeHead(200, { "Content-type": "text/html" });
//             response.end(data);
//         }
//     });
// });
// server.listen(port, host, function() {
//     console.log("Listening...");
// });


// console.log("ver 4.2");


// console.log("Starting...");
// var fs = require("fs");
// var host = "127.0.0.1";
// var port = 80;
// var express = require("express");
// var app = express();

// app.get("/", function(request, response) {
//     response.send("hello!");
// });

// app.listen(port, host);


// console.log("ver 4.5");

// console.log("Starting...");
// var fs = require("fs");
// var host = "127.0.0.1";
// var port = 80;
// var express = require("express");

// var app = express();

// app.get("/", function(request, response) {
//     response.send("hello!");
// });

// app.get("/hello/:who", function(request, response) {
//     response.send("Hello! " + request.params.who);
// });
// app.get("/member/login", function(req, res) {
//     res.render("loginForm", {})
// })
// app.post("/member/login", function(req, res) {
//     res.render("loginForm", {})
// })
// app.listen(port, host);




// console.log("ver 4.8");


// console.log("Starting...");
// var fs = require("fs");
// var host = "127.0.0.1";
// var port = 80;
// var express = require("express"); //1

// var app = express(); //2

// // app.get("/", function(request, response) {
// //     response.send("hello!");
// // });

// app.get("/hello/:text", function(request, response) {
//     response.send("Hello!" + request.params.text);
// });

// // Web伺服器的靜態檔案置於 public 資料夾
// app.use(express.static("public")); //c:\xampp\htdocs //3



// app.listen(port, host);

// var express = require("express"); //1 引用
//var app = express(); //2 呼叫
//app.use(express.static("public")); //c:\xampp\htdocs //3 指定主目錄
// app.listen(80); //4 監聽
//四行程式寫一個server