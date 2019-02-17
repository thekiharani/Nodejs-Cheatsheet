const http = require('http');
// create a server
http.createServer((req, res) => {
	// write response
	res.write('Hello People');
	res.end();
}).listen(5000, () => console.log('Server running at Port 5000'));