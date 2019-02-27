const ws = require('http').createServer();

const io = require('socket.io')(ws);

io.listen(9000);

io.on('connection',(client)=>{
    client.on('event server',(data)=>{
        client.emit('event client',{message:data.message});
        client.broadcast.emit('event client',{message:data.message});
        console.log(data)
    })

    client.on('disconnect',()=>{
        console.log('连接已断开');
    })
})