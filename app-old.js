const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'aplication/json' });

    let salida = {
        nombre: 'Maximiliano',
        edad: 25,
        url: req.url,
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log('Escuando el puerto 8080');