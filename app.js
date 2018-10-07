// ------------------------------------------------------
// --- say hello app
// ------------------------------------------------------

// function sayHello(name) {
//     console.log("Hello " + name);
// }
// sayHello("bryan");
// console.log(window);

// ------------------------------------------------------
// --- modules
// ------------------------------------------------------

// In node, every file is module
// when you console.log(module), you get a json object of the module
// we don't want to accidentally override the value of logger so we define it as a constant

// const log = require("./logger.js");
// log("message");
// look into jshint

// ------------------------------------------------------
// --- path
// ------------------------------------------------------

// this method of requiring by using "path" gives you an object with the current folder instead of having to list a string of the desired file path

// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// ------------------------------------------------------
// --- operating system
// ------------------------------------------------------

// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);
// console.log("Free Memory: " + freeMemory);

// ------------------------------------------------------
// --- template string
// ------------------------------------------------------

// Template String (elimiates need to use concatinating syntax)
// ES6 / ES2015

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// ------------------------------------------------------
// --- fs
// ------------------------------------------------------

// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);

// ------------------------------------------------------
// --- fs asynchronus
// ------------------------------------------------------

// fs.readdir("./", function(err, files) {
//     if (err) console.log("Error", err);
//     else console.log("Result", files);
// });

// ------------------------------------------------------
// --- Event Emitter
// ------------------------------------------------------

// the name of the class "EventEmitter" includes a capitalized first letter and is not "eventEmitter" becuase it sets it apart as a class

// CLASS: A class is a container for multiple related methods and properties
// CLASS vs OBJECT: Class = Human, Object = John (an actual individual instance of the class)

// logger for event listeners, classes, etc
// const EventEmitter = require('events');

// const Logger = require("./logger");
// const logger = new Logger();

// register a listener - ES6 Function
// logger.on("messageLogged", (event) => {
//     console.log("listener called", event); 
// });

// logger.log("message");

// ------------------------------------------------------
// --- http, server
// ------------------------------------------------------

// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3001;

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Hello World!\nWhat the eff is up?\n");
//     }
//     if (req.url === "/api/courses") {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at ${port}:${hostname}/`);
// });

// ------------------------------------------------------
// --- more fs
// ------------------------------------------------------

// const fs = require("fs");

// ------------------------------------------------------
// --- append
// ------------------------------------------------------

// fs.appendFile(
//     "file.txt",
//     "hello world.\nwhat the eff is up y'all?\nlet's party.\n",
    
//     (err) => {
//     if (err) throw err;
//     console.log("New text appended to the file!");
// });

// ------------------------------------------------------
// --- open file and append
// ------------------------------------------------------

// fs.open("file.txt", "a", (err, fd) => {

//     if (err) throw err;

//     fs.appendFile(fd, "text/data to append", "utf8", (err) => {
//         fs.close(fd, (err) => {
//             if (err) throw err;
//         });
//         if (err) throw err;
//     })
//     console.log("New text appended to the file!");
// });

// ------------------------------------------------------
// --- rename and delete
// ------------------------------------------------------

// fs.rename("/home/filename1", "/home/newfilename1", (err) => {
//     if (err) throw err;
//     console.log("rename completed");
// });

// delete is fs.unlink();

// ------------------------------------------------------
// --- more path
// ------------------------------------------------------

// basename - get current path

// const path = require("path");
// const myPath = path.basename(__filename);
// console.log(myPath);

// const baz = path.basename("/foo/bar/baz.html");
// console.log(baz); // baz.html

// const baz2 = path.basename("/foo/bar/baz.html", ".html");
// console.log(baz2);

// use path.join to create a unique file path to serve an individualized page based upon a user name or user activity
// let userName = "David";
// const join = path.join("/users", userName, "index.html");
// console.log(join);

// consistent paths in windows - path.win32.basename()
// consistent paths in both windows and linux - path.posix.basename();

// ------------------------------------------------------
// --- more event listeners
// ------------------------------------------------------

// const {EventEmitter} = require("events");
// const eventEmitter = new EventEmitter();

// listens for the event and does something when that event happens
// eventEmitter.on("SoloLearn", () => {
//     console.log("SoloLearn occurred!");
// })

// fires the event
// eventEmitter.emit("SoloLearn");

// more than one event listener on the eventEmitter object
// eventEmitter.on("mySecondEvent", () => {
//     console.log("mySecondEvent occured!");
// });

// eventEmitter.emit("mySecondEvent");

// add parameters to the event listener

// eventEmitter.on("Person", (name, age) => {
//     console.log(`I'm ${name} and I'm ${age} years old`);
// })

// emit person with parameters
// eventEmitter.emit("Person", "David", "30");

// eventNames shows all of the events attached to an emitter
// console.log(eventEmitter.eventNames());

// ------------------------------------------------------
// --- timers
// ------------------------------------------------------

// setImmediate - runs code once immediately

// setImmediate((name, age) => {
//     // usually the heavy operations go here
//     console.log(`I'm ${name} and I'm ${age} years old`)
// }, "David", 28);

// setInterval - runs the code every interval set - every 2 seconds in this case

// setInterval((name, age) => {
//     console.log(`I'm ${name} and I'm ${age} years old`)
// }, 2000, "David", 28);

// setTimeout - runs the code once after the time set - every 2 seconds in this case

// setTimeout((name, age) => {
//     console.log(`I'm ${name} and I'm ${age} years old`)
// }, 2000, "David", 28);

// ------------------------------------------------------
// --- cancelling timers
// ------------------------------------------------------

// clearImmediate(immediate);
// clearInterval(timeout);
// clearTimeout(timeout);

// clearing example 
// generates and logs a random number every second as long as the number is under 10. If the random number generated is greater than 8, the clearInterval runs and the timer is cancelled.

// const myTime = setInterval(() => {
//     const num = Math.floor((Math.random() * 10) + 1);
//     console.log("the random number is: " + num);
//     if (num > 8) {
//         clearInterval(myTime);
//     }
// }, 1000);

// ------------------------------------------------------
// --- streams
// ------------------------------------------------------

// streams are good for large amounts of data - similar to strings or arrays accept that streams might not be available all at once (memory size or bandwidth issues). Streams load data in chunks once at a time. Handling big data is not the only use case for streams though. You can also use them for piping the data into other commands (similar to piping in Linux).

// Example: req and res in node.js server creation are streams
// req is an http.IncomingMessage, which is a Readable Stream
// res is an http.ServerResponse, which is a Writable Stream
// fs.createWriteStream() method creates a writable stream
// fs.createReadStream() method creates a readable stream
// readable streams use the EventEmitter to notify application code when data is availalbe to be read from the stream. The available data can be ready from the stream in multiple ways.

// writes the specified text to the file one million times - a big writable file

// const fs = require("fs");
// const file = fs.createWriteStream("./big-file.txt");

// for (let i = 0; i <= 1000000; i++) {
//     file.write("Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident aut voluptates ipsum labore. Ullam hic perspiciatis earum pariatur, vero itaque similique nobis inventore! Eaque quibusdam voluptates iusto obcaecati sapiente.\n");
// }
// file.end();

// serve the big file from a node.js server - the readFile method loads the entirefile into RAM before responding

// const server = require("http").createServer();
// const fs = require("fs");

// server.on("request", (req, res) => {
//     fs.readFile("./big-file.txt", (err, data) => {
//         if (err) throw err;
//         res.end(data);
//     });
// });

// server.listen(3001);

// the createReadStream() method "pipes" the stream to the response object in chunks instead of waiting for the entire response to load into RAM

// const server = require("http").createServer();
// const fs = require("fs");

// server.on("request", (req, res) => {
//     const src = fs.createReadStream("./big-file.txt");
//     src.pipe(res);
// });

// server.listen(3001);

// ------------------------------------------------------
// --- read data from a file and log it 
// ------------------------------------------------------

// var fs = require("fs");

// fs.readFile("Unsolved/best_things_ever.txt", "utf8", (error, data) => {
//     if (error) throw err;
//     var dataArr = data.split(",");
//     dataArr.forEach((item) => {
//         console.log(item);
//     })
// });

// ------------------------------------------------------
// --- npm and http requests
// ------------------------------------------------------

// npm init will create a package.json
// npm i will install packages

// var request = require("request");

// request("https://en.wikipedia.org/wiki/Kudos_(granola_bar)", function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     console.log(body);
//   }
// });

// ------------------------------------------------------
// --- learning packages and requests with OMDB
// ------------------------------------------------------

// var request = require("request");
// var nodeArgs = process.argv;
// var movieName = "";

// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//       movieName = movieName + "+" + nodeArgs[i];
//     }
//     else {
//       movieName += nodeArgs[i];
//     }
// }

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// request(queryUrl, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var data = JSON.parse(body);
//     console.log("The movie's title is: " + data.Title);
//     console.log("The movie's IMDB rating is: " + data.imdbRating);
//     console.log("The movie is rated " + data.Rated);
//     console.log("The movie's release year is: " + data.Year);
//   }
// });

// ------------------------------------------------------
// --- node bank acct
// ------------------------------------------------------

// var input = process.argv[3];
// var operator = process.argv[2];

// function getTotal() {
//     fs.readFile("bank.txt", "utf8", (error, data) => {
//         if (error) throw err;
//         else
//         total = 0;
//         var dataArr = data.split(",");
//         for (let i = 0; i < dataArr.length-1; i++) {
//             total += parseFloat(dataArr[i]);
//         }
//         console.log(total);
//     });
// }

// const fs = require("fs");

// switch(operator) {

//     case "total":

//     getTotal();
//     break;

//     case "deposit":

//     fs.appendFile("bank.txt", `${input},`, (err) => {
//     if (err) console.log(err);
//     else getTotal();
//     });
//     break;

//     case "withdraw":

//     fs.appendFile("bank.txt", `-${input},`, (err) => {
//         if (err) console.log(err);
//         else getTotal();
//     });
//     break;

//     case "lotto":

//     const num = Math.floor((Math.random() * 10) + 1);
//     console.log(`The lucky number is ${num}`);

//     if (parseFloat(input) === num) {
//         fs.appendFile("bank.txt", `${input*2},`, (err) => {
//             if (err) console.log(err);
//             else getTotal();
//         });
//         break;
//     }

//     else {
//         fs.appendFile("bank.txt", `-${input},`, (err) => {
//             if (err) console.log(err);
//             else getTotal();
//         });
//         break;
//     }

// }

// ------------------------------------------------------
// --- Geocode locations
// ------------------------------------------------------

// var NodeGeocoder = require("node-geocoder");

// var options = {
//   provider: "mapquest",
//   apiKey: "AOwMupgiBjoRn6lUvtkSYTs86mcuAJaK"
// };

// var geocoder = NodeGeocoder(options);
// var nodeArgs = process.argv;
// var location = "";

// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//       location = location + "+" + nodeArgs[i];
//     }
//     else {
//       location += nodeArgs[i];
//     }
// }

// console.log(location);

// geocoder.geocode(location, function(err, res) {
//   console.log(JSON.stringify(res[0], null, 2));
//   if (err) throw err;
// });

// ------------------------------------------------------
// --- Geocoding with Weather 
// ------------------------------------------------------

// Include both the weather and node-geocoder NPM packages
// var weather = require("weather-js");
// var NodeGeocoder = require("node-geocoder");

// // Replace with your mapquest consumer API key
// var options = {
//   provider: "mapquest",
//   apiKey: "AOwMupgiBjoRn6lUvtkSYTs86mcuAJaK"
// };

// var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
// var address = process.argv.slice(2).join(" ");

// Then use the Google Geocoder to geocode the address
// geocoder.geocode(address, function(err, data) {
//   console.log(JSON.stringify(data[0], null, 2));

//   var address = data[0];

  // Depending on what information is available for an address, build formatted search
//   var search = "";

//   if (address.city) {
//     search += address.city;
//   }

//   if (address.stateCode) {
//     search += ", " + address.stateCode;
//   }

//   if (address.zipcode) {
//     search += " " + address.zipcode;
//   }

//   if (address.countryCode) {
//     search += " " + address.countryCode;
//   }

  // Run the weather package to search by either zip or city.
//   weather.find({ search: search, degreeType: "F" }, function(err, result) {
    // If there is insufficient data, notify the user.
    // if (err) {
    //   console.log("\r\n\r\n\r\n");

    //   console.log("Sorry we don't have enough data on that location! Try somewhere else.");

    //   console.log("\r\n\r\n\r\n");

    //   return;
    // }

    // Then print the Weather information and complete Address
//     console.log("\r\n\r\n\r\n");

//     console.log("Weather Forecast for: " + search);

//     console.log("Current Temperature: " + result[0].current.temperature + "° F");

//     console.log("Sky: " + result[0].current.skytext);

//     console.log(
//       "Tomorrow's Forecast: Low of " +
//         result[0].forecast[1].low +
//         "° F | High of " +
//         result[0].forecast[1].high +
//         "° F"
//     );

//     console.log("\r\n\r\n\r\n");
//   });
// });

// ------------------------------------------------------
// --- get responses to pre-set q's inquirer package 
// ------------------------------------------------------

// Load the NPM Package inquirer
// var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
// inquirer
//   .prompt([
//     // Here we create a basic text prompt.
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "username"
//     },
//     // Here we create a basic password-protected text prompt.
//     {
//       type: "password",
//       message: "Set your password",
//       name: "password"
//     },
//     // Here we give the user a list to choose from.
//     {
//       type: "list",
//       message: "Which Pokemon do you choose?",
//       choices: ["Bulbasaur", "Squirtle", "Charmander"],
//       name: "pokemon"
//     },
//     // Here we ask the user to confirm.
//     {
//       type: "confirm",
//       message: "Are you sure:",
//       name: "confirm",
//       default: true
//     }
//   ])
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.confirm) {
//       console.log("\nWelcome " + inquirerResponse.username);
//       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
//     }
//     else {
//       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
//     }
//   });

// ------------------------------------------------------
// --- inquirer and geocoding with user input 
// ------------------------------------------------------

// var inquirer = require("inquirer");
// var NodeGeocoder = require("node-geocoder");

// var options = {
//   provider: "mapquest",
//   apiKey: "AOwMupgiBjoRn6lUvtkSYTs86mcuAJaK"
// };

// var geocoder = NodeGeocoder(options);

// inquirer.prompt([
//   {
//       type: "input",
//       message: "Enter a location to get coordinates.",
//       name: "location"
//   }
// ]).then(function(inquirerResponse) {
//   if (inquirerResponse.location) {
//     address = inquirerResponse.location;
//     // Then use the Google Geocoder to geocode the address
//     geocoder.geocode(address, function(err, data) {
//       // Then console log the result and stringify it.
//       // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
//       // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
//       console.log(JSON.stringify(data[0].city, null, 2));
//       console.log(JSON.stringify(data[0].state, null, 2));
//       console.log(JSON.stringify(data[0].latitude, null, 2));
//       console.log(JSON.stringify(data[0].longitude, null, 2));
//     });
//   }
// });

