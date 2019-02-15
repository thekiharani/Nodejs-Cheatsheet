const fs = require('fs');
const path = require('path');

// // create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
// 	if(err) throw err;
// 	console.log('Folder dreated');
// });

// // create & write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world...', {}, (err) => {
// 	if(err) throw err;
// 	console.log('Write successful');
// 	// add content to file
// 	fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ', I love Nodejs. What about you?', {}, (err) => {
// 		if(err) throw err;
// 		console.log('Append successful');
// 	});
// });

// // add content to file
// fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ', I love Nodejs', {}, (err) => {
// 	if(err) throw err;
// 	console.log('Operation successful');
// });

// // read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
// 	if(err) throw err;
// 	console.log(data);
// });

// // rename a  file
// fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'hello-rename.txt'), (err, data) => {
// 	if(err) throw err;
// 	console.log('File renamed...');
// });

// copy a  file
fs.copyFile(path.join(__dirname, 'test', 'hello-rename.txt'), path.join(__dirname, 'test', 'hello.txt'), (err, data) => {
	if(err) throw err;
	console.log('File copied...');
});