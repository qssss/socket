const ws = require('http').createServer();

const io = require('socket.io')(ws);

io.connect(8000);

io.on('connection',(client)=>{
    client.on('event server',(data) {
        client.send('event client',{message:data.message});
        client.broadcast.send('event client',{message:data.message});
    })

    client.on('disconnect',()=>{
        console.log('离开了');
    })
})

