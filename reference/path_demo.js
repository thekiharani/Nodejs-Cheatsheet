const path = require('path');
// full file name
console.log(__filename);
// base file name
console.log(path.basename(__filename));
// directory name
console.log(path.dirname(__filename)); // console.log(__dirname);
// file extension
console.log(path.extname(__filename));
// path object
console.log(path.parse(__filename));
// concatinate paths
console.log(path.join(__dirname, 'test', 'hello.html'));