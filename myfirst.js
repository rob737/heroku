var http=require('http');
var dt=require('./dateModule');

http.createServer(function (req,res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("Current date:\n"+ dt.myDateTime());
	res.write(req.url);
	res.end();
	console.log('Having fun');
}).listen( process.env.PORT || 8080);

