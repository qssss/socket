const submit = document.querySelector('#submit');
const content = document.querySelector('#content');
const msg = document.querySelector('#msg');

const socket = io.connect('ws://localhost:9000');

socket.on('connect',()=>{
    socket.on('event client',(data)=>{
        content.innerHTML += data.message + '<br/>';
    })

    socket.on('disconnect',()=>{
        console.log('closed')
    })
});

submit.addEventListener('click',()=>{
    var msg2 = msg.value;
    socket.emit('event server',{message:msg2});
    msg.value = '';
},false)



