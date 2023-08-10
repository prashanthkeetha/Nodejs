var fs = require('fs')
fs.readFile('mod.js','Utf8',function(err,data){
    console.log(data)
})