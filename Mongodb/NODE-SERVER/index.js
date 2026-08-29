const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('hello from node server');
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(5000, () => {
    console.log('server is running perfectly on port 5000');
});