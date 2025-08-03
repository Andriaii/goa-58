const http = require('http');

const messages = [];

const server = http.createServer((req, res) => {
    if (req.url === '/messages' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                messages.push(parsedData.message);
                console.log('Message saved in messages array');
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'success', data: parsedData.message }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'ERROR happened' }));
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
