const url = require('url');
const myUrl = new URL('https://thekiharani.co.ke:8005/post?id=1089&status=published');
// // serialized URL
// console.log(myUrl.href); // console.log(myUrl.toString());

// // host / root domain
// console.log(myUrl.host); // with port

// // host name
// console.log(myUrl.hostname); // without port

// path name
console.log(myUrl.pathname);

// serialiuzed queries
console.log(myUrl.search);

// serialiuzed queries params
console.log(myUrl.searchParams);

// add queries params
myUrl.searchParams.append('uuid', '1289');
console.log(myUrl.searchParams);
// loop through params
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`);
});
