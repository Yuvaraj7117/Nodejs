//! Creating Server in NodeJS

//* The http module is a built-in module in NodeJS which is used to create a server.
//!  Core Modules

// Some of the core modules already availble in NodeJS,these are installed when we can installed NodeJS.
// Few modules are,

//? 1. fs
//? 2. http
//? 3. https
//? 4. path
//? 5. os

//?  http:  This module will helps to create an server.
//?  https: This module will helps to create an secure server.
//?  fs:    This module will helps to create an file system.
//?  path:  This module will helps to create an path.It will avoids the pathError using the same path in Windows and Linux.
//?  os:    This module will helps to create an operating system.

//! Creating Server


const http=require('http');
// Why we can put const for importing purposes,because in this time we can create only one server.At the same time in future we can't change the server coding,it will leads to an error.So we can declaring the importing and necessary statement in const.
// We can use any Name for the variable,it is not an any constarints for declaring the variableName.
const fs=require('fs')

//? require()
//* This is a function which is used to import the modules in NodeJS.
//* It is used to import both the built-in core modules and also an user-defined modules.
//* If we want to import the built-in modules ,we can give the right path.
//* We don't want to specify the extension of the file(like.. not an file.js only file is enough)
//* If we can import the built-in module with `./`
//* At the same time, if we can give only the modulename with '' and without ./ ,it will only import the built-in modules(core Modules).
//* http variable is act as an object for the http Module.

// function requestListener(req,res){
//   console.log(req);
// }
// const server=http.createServer(requestListener);
// server.listen(3000);

//? Compared to the above  code, we can use the arrow function is an easy.


const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log(req.on);
    // console.log(req.headers);
    // console.log(req.httpVersion);
    // console.log(req.url);
    // console.log(req.statusCode);
    // console.log(req.method);
    // console.log(req.closed);
    // console.log(req.complete);
// console.log(req.connection);
console.log(req.connection.remoteAddress);

//! Headers

// * Headers is an first part of our response/request
// * If we can hit the url into the urlbar then the header(such as information) was created and send to the server.
// * If we forget to handle the response object then the server was loading and searching infinitely.It only stops when the response get over.
// * At the same time we can set the header for sending the data from the server to browser also....
// * We can set the header using the res.setHeader() method.
// * Inside the () we must specify the two important parameters,such as. 'Content-type','text/html'
// * If we can't set the header then the server will send the data in the default format(text-format)
// * We can set the header using the res.writeHead() method.
// * We can writing the contents as small small parts elegantly
// * Once our work are finished we can put the end() method.
// * We cannot define the write method for the same response object after we declaring the end() method

//! Routing

//? How we can routing responses

//* We can get the which url we can enter into the url bar by using req object.
//* We can get the url by using req.url property.

console.log(req.url);
// * The root url

// res.setHeader('Content-type','text/html');
// res.write('<html>')
// res.write('<head><title>Yeshua</title></head>')
// res.write('<body><h1>Hello from NodeJS Server!...</h1></body>')
// res.write('</html>')
// res.end();
// res.write('');//It produce an error
//* If we want to finish the response we want to not executing the below code then you can use return res.end()
//* It represents the execution of the statements are over.




//? Network Tab in Browser

//* We can check our response/request in this tab.
//* In the above sample code we can only send the content-type but    keep-alive,connection,date are the some fields automatically send by the server to the client(Browser).
//* Please use the Network tab to get the important details.


//! Redirecting responses

const url=req.url;
const method=req.method;




//? if condition in NODEJS

if(url=='/'){
  res.setHeader('Content-type','text/html');
  res.write('<html>')
  res.write('<head><title>Yeshua</title></head>')
  res.write('<body><form action="/message" method="POST"><input type="text" /><button>Submit</button></form></body>')
  res.write('</html>')
  return res.end();
  

  //return keyword terminates the execution of the block of code
}

/**

//*If the home url or default url(localhost:3000) is enter and hit then,then the form was shown because  we  can use the separeate url condition in the above see the above the example

//*then the form was submitted the response was going to the /message url(because the form was submitted in that url) we can writing the redirection code for the above code snippet.

//*after we can hitting the submit buttton the fraction of the second the url was changed to localhost:3000/message to localhost:3000
//*it is an redirection of the responses

*/

if(url=='/message' && method=='POST'){
  fs.writeFileSync('hello.txt','Yuvaraj');
  // res.setHeader('Location','/redirect');
  res.setHeader('Location','/');
  res.statusCode=302;
  return res.end();
}

/*
For Redirection 


Request URL:http://localhost:3000/message
Request Method:POST
Status Code:302 Found
Remote Address:[::1]:3000
Referrer Policy:strict-origin-when-cross-origin


*/

res.setHeader('Content-type','text/html');
res.write('<html>')
res.write('<head><title>Yeshua</title></head>')
res.write('<body><h1>Hello from NodeJS Server!...</h1></body>')
res.write('</html>')
res.end();




  });
server.listen(3000);
console.log(`Server is running on the port:3000`); 
