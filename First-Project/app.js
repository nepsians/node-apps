const path = require('path');
const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');
const emitter= new EventEmitter();


var pathObj = path.parse(__filename);

//console.warn("real path: ", __filename);
//console.warn("pathobject: ",pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.warn('Total Memory:' + totalMemory);


const files = fs.readdir('', function(err, files)
	{
	//	if (err)// console.warn('Err',err);
	//	else
			//console.warn("result", files);
	});
//console.warn(files)

// EVENTs Eg.
//
//Register  a listener

//emitter.on('messageLogged', function(arg){
//	console.log('listener called', arg);	
//})


//Raise a event
//emitter.emit('messageLogged',{ id: 1, url: "https://"});
//

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', arg =>{
	console.log("kisterfasdf",arg);
}
)
logger.log('messagesssss');




