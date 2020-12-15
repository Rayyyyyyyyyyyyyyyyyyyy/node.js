// JSON

var dataList = [
    { name: "Jeter", no: 2 },
    { name: "Jermy", no: 7 }
]
var s = JSON.stringify(dataList)
    // console.log(s);
var playerList = JSON.parse(s)
console.log(playerList[1].name);