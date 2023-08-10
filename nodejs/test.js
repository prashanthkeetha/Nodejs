var fs = require('fs')
fs.writeFile('write.js','console.log(done)',function(err,){
    console.log('Data saved')
})