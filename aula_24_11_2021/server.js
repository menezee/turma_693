const http = require('http')


http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end(`<h1>Home</h1>`)
    }
    else if(req.url === '/ola'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`<h1>ola</h1>`)
    }
    else if(req.url === '/ola/json'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(`{'nome': 'lucio'}`)
    }
    else {
        res.writeHead(404);
        res.end()
    }

}).listen(5000, () => console.log('foi'))