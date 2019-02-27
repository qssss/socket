const ws = new WebSocket('ws://localhost:9000');

ws.onopen = function() {
    ws.send('大家好')
}
ws.onmessage = function(data) {
    let content = document.querySelector('#content');
    content.innerHTML += data.data + '<br/>';
}
ws.onerror = function(err) {
    console.log(err);
}
ws.onclose = function() {
    console.log('closed');
}
