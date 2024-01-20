const http = require("http")
const WebSocketServer = require("websocket").server;

const httpServer = http.createServer()
const webSocketServer = new WebSocketServer({httpServer})

const PORT = process.argv[2] || 8181;

let connection = null;
httpServer.listen(PORT,()=>console.log(`server listening on ${PORT}`))

webSocketServer.on("request",request=>{
    connection = request.accept(null,request.origin)
    connection.on("message",data=>{
        console.log(`i received msg ${data.utf8Data}`);
        connection.send(`hey client receive ur msg ${data.utf8Data} on ${PORT}`)
    })
})


