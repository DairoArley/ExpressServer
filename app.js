var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola mundo');
});

app.post('/', function (req, res) {
    res.send('Tienes un POST request');
});

app.put('/user', function (req, res) {
    res.send('Tienes un PUT request en /user');
});

app.delete('/user', function (req, res) {
    res.send('Tienes un DELETE request en /user');
});  

app.listen(3000, function () {
  console.log('Escuchando por el puerto 3000');
});