//这是一个前端的服务器

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);
