// console.log("Welcome to NodeJS Environment");

// File-System-Works

const fs=require('fs');
// fs is an fileSystem module.the fs is an object for the-file-system-module-on-left-side

// We can perform various file operations like read,write,etc.....

// For example,

fs.writeFileSync('yuva.txt','Praise The Lord Jesus Christ');

// This will create a file named yuva.txt in the same directory and write the content inside it
// The first parameter is the name of the file and the second parameter is the content of the file



//? How Web Works

//**    User/Client(Browser)  ----->   http;//sample.com -----> Domain Lookup ------> Request  ------> Server (127.48.55.54) --->Response(HTML,JSON,XML)   **/

//  If we can enter the URL in the browser it will shows the corresponding web page to us.But in backend there are any works are there.
//Initially we can enter the URL in the browser/client it will take the URL and request the Domain Name Servers.Then the DNS was take the domain name what we enter(ex:sample.com) and give the server address which is holding the requested page.This server ip address contains large amount of Numbers.
//Server is one type of computer it is used to processing the requests from the client ,it located at anywhere
//this server was run the programs by using the NodeJS,Python,PHP.
//Then the browser/client will request the server with the help of the server ip address.Then the server
// will response the requested page to the browser/client with the help of the server ip address.
// Then the browser/client will display the requested page to the user.

//The server was sending the response to the client/Browser in the form of XML/JSON,Etc....

// HTTP:Hyper Text Transfer Protocol
// HTTPS:Hyper Text Transfer Protocol (Secured way)

// Protocols:
//   Protocols means rules
//   Protocols are used to communicate between two devices




