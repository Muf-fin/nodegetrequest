let http = require('http');

let server = http.createServer((req,res) => {
    res.setHeader("Content-Type","application/json");
    if(req.url === '/user') {
        res.end("{'name': 'saurabh','userId': '1269'}");
    } 
    else if(req.url === '/order') {
        res.end("{'order': '1', 'quantity': '5'}");
    }
});

server.listen(3000);