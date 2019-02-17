const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('<h1>Home Page II</h1>');
	}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));