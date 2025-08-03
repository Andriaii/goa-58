const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/cars' && req.method === 'GET') {
        
        fs.readFile('cars.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } 
    else if (req.url === '/cars' && req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const newCar = JSON.parse(body); 
                const cars = JSON.parse(fs.readFileSync('cars.json', 'utf8'));
                
                
                cars.push(newCar);
                
                
                fs.writeFileSync('cars.json', JSON.stringify(cars, null, 2));
                
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Car added successfully', data: newCar }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


