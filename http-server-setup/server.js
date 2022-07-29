const http = require('http');
const port = 5000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type' : 'text/html'});
    res.write("<h4>Node server is running!</h4>");
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});