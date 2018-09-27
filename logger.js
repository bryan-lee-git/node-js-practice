const EventEmitter = require('events');

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log(message) {
        // send an http request
        console.log(message);
        // signaling that an event is happening, raise an event
        this.emit("messageLogged", {id: 1, url: "http://" });
    }
}

module.exports = Logger; 