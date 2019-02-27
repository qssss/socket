//这是一个后端的socket服务
const WebSocketServer = require('ws').Server;

const ws = new WebSocketServer({
    port: 9000 //创建socket实例并绑定端口号
})

let clientMap = {};
let i = 0;

ws.on('connection',(client)=>{
    client.name = ++i;

    clientMap[client.name] = client;

    //当服务端接收到客户端发送的消息时
    client.on('message',(data)=>{
        broadcast(client,data);
    })
    
    client.on('close',()=>{
        delete clientMap[client.name];
        console.log(client.name + '离开了');
    })
})

function broadcast(client,data) {
    for(var key in clientMap) {
        clientMap[key].send(client.name + '说:' + data);
    }
}