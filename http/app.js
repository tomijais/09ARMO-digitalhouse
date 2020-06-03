const http = require('http');

http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text-plain"});
res.end("Hola mundo!");
}).listen(3030, 'localhost', function(){
    console.log('Servidor corriendo en el puerto 3030');
    
})