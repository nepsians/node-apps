const http = require('http');

const server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.write("Hello World");
		res.end();
	}

	if(req.url === '/api/course'){
		res.write(JSON.stringify([{name: "nihal"},{name: "ram"},{name:"hari"}]));
		res.end();
	}
});

//server.on('connection', socket=>{
//	console.log("new connections.....")
//})

server.listen(3001);

console.log("Listening on port 30000....");

