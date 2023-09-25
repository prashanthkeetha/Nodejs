//-------------------------------------
/*const express = require('express');
const app = express();
const fs  = require('fs');

fs.unlink(__dirname + /1.txt/,function(err){
    if (err) throw err
    })
    console.log('successfully deleted __dirnmae');*/

/*const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

const filepath = path.join(__dirname,'1.txt');

fs.readFile(filepath,'utf-8',function (err){
    if (err) throw err
})
console.log('successfully joining file');*/


/*const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

const filepath = path.join(__dirname, '1.txt');

if (fs.existsSync(filepath)) {
    console.log('File exists at:', filepath);
} else {
    console.log('File does not exist at:', filepath);
}*/


/*const express = require('express');
const router = express();
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, '1.txt');

fs.writeFile(filePath,'working on fs', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('writefile is working');
    }
});*/



//________________________________________________________________
/*const express = require('express');
const router = express();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '1.txt');

router.use('/post', function(req,res){


    fs.writeFile(filePath,'working on fs',function(err){
        if(err){
            console.log('unable to execute');                 
            res.status(500).send('unable to execute')
        }else{
            console.log('code working');
            res.status(200).send('code working')
        }
    })
})
router.listen(3218);
console.log('listening');*/


/*const express = require('express');
const router = express();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '1.txt');

router.use('/post', function (req, res) {
  fs.writeFile(filePath, 'working on fs', function (err) {
    if (err) {
      console.log('unable to execute');
      res.status(500).send('unable to execute');
    } else {
      console.log('code working');
      res.status(200).send('code working');
    }
  });
});

// Add this line to handle the initial response
router.use('/post', function (req, res) {
  res.send(req.__filename);
});

// Start your server
const port = 3000;
router.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});*/


//_______________________________________________________________

//--------------------------------------

/*const express = require('express');
const router = express();

router.get(/1/,function(req,res){
    res.send('1.txt');
})
router.listen(5200)
console.log('instead of get using router')*/


/*const express = require('express');
const app = express();

app.get('/wo',function(req,res){
    res.send('wo?rk')
})

app.listen(5200);
console.log('working on path');*/

/*const express = require('express');
const app = express();

app.post('/wo',function(req,res, next){
    res.setHeader('contant-type','text/plain')
    res.send('wo?rk')
})

app.listen(5200);
console.log('working on post method')*/

/*const express = require('express');
const app = express();

console.log('hi')
app.get('/month/:id', function(req,res){
    console.log('hi')
    const userId = req.params.id;
    
    res.send(userId)
})
console.log('hkkki')

app.listen(5300);
console.log('server is listening');*/

/*const express = require('express');
const app = express();

app.post('/post/:id',function(req,res){
    const userId = req.params.id;
    res.send(userId)
})
app.listen(5300)
console.log('server is working');*/

/*const express = require('express');
const router = express();

console.log('work')
router.get('/get' , function(req,res){
    console.log('ing')
    res.send('get'+ 'in');
})
router.listen(5300);
console.log('server is listening')*/

/*const express = require('express');
const router = express();

console.log('check')
router.post('/postin', function(req,res){
    console.log('ing');
    res.send('made' + 'it');
})

router.listen(5300)
console.log('post mehtod is listening');*/

/*const express = require('express')
const router = express();

router.get('/prac.*' , function(req,res){
    res.send('practise')
})

router.listen(5300);
console.log('listening to the output');*/

/*const express = require('express');
const router = express();

router.post('/string.*', function(req,res){
    res.send('stringefy');
});

router.listen(5300);
console.log('listening to the port');*/

/*const express = require('express');
const router = express();

router.get('/prot(est)?',function(req,res){
    res.send('prot(est)?s')
});

router.listen(5300);
console.log('listening to the port');*/

/*const express = require('express');
const app = express();


app.post('/paint(ing)?', function(req,res){
    res.send('paint(ing)?')
});

app.listen(5300);
console.log('listening to the port');*/

/*const express = require('express');
const app = express();

app.get(/.*war$/ , function (req,res) {
    res.send(/.*war$/)
})

app.listen(5300);
console.log('listening to the port');*/

/*const express = require('express');
const app = express();

app.post('/.*part$/', function(req, res) {
    console.log(part);
    res.send("Received a POST request ending with 'part'");
});

app.listen(5300, () => {
    console.log('Listening on port 5300');
});*/






