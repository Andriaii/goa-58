
const http = require('http');

const fs = require('fs');


const pages = ['index.html', 'about.html', 'contact.html'];


const server = http.createServer((req, res) => {
    
    const randomPage = pages[Math.floor(Math.random() * pages.length)];

    
    fs.readFile(randomPage, (err, data) => {
        if (err) {
            
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data); 
        }
    });
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


