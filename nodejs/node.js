var http = require('http')
http.createServer(function(req,res){
    res.write("I am working on nodejs")
    res.end()
}).listen(8082)