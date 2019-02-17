const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// if(req.url === '/') {
	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
	// 		if(err) throwerr;
	// 		res.writeHead(200, { 'Content-Type': 'text/html' });
	// 	    res.end(content);
	// 	});
	// }

	// if(req.url === '/api/users') {
	// 	const users = [
	// 		{ id: 1, name: 'Jay Kiharani', age: 25 },
	// 		{ id: 12, name: 'Kendi Gitonga', age: 23 }, 
	// 		{ id: 23, name: 'Aria Kawi', age: 1 }
	// 	];
	// 	res.writeHead(200, { 'Content-Type': 'application/json' });
	// 	    res.end(JSON.stringify(users));
	// }

	// build file path
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
	// file extension
	let ext = path.extname(filePath);
	// initial content type
	let contentType = 'text/html';
	// check extension and change content type
	switch(ext) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	// read file
	fs.readFile(filePath, (err, content) => {
		if(err) {
			if(err.code == 'ENOENT') {
				// page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
					res.writeHead(200, { 'Content-Type': 'text/html' });
					res.end(content, 'utf8');
				});
			} else {
				// server error
				res.writeHead(500, { 'Content-Type': 'text/html' });
					res.end(`Server Error: ${err.code}`);
			}
		} else {
			// success in response
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(content, 'utf8');
		}
	});
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));