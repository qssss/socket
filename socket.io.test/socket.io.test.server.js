const ws = require('http').createServer();

const io = require('socket.io')(ws);

io.listen(8000);

io.on('connection',(client)=>{
    client.on('event server',(data)=>{
        if(data.message > 0.65) {
            if(typeof client.warning === 'undefined') {
                client.warning = 0;
            }
            setTimeout(()=>{
                client.emit('event client',{count:++client.warning});
            },2000)
        } else {
            // client.emit('event client',{message:'你发送的随机数是：' + data.message});
            // client.broadcast.emit('event client',{message:'你发送的随机数是：' + data.message});
        } 
    })
    client.on('disconnect',()=>{
        console.log('离开了');
    })
})

