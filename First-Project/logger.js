const EventEmitter = require('events');

var url = "http://logger.io";

class Logger extends EventEmitter{
 log(message){
	console.log(message);

	this.emit('messageLogged', {id:1, url:"https://"});
	}
}
module.exports = Logger;
