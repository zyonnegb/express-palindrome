const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/js/main.js', (request, response)=>{
    response.sendFile(__dirname + '/js/main.js')
})


//Get Method
app.get('/api/:name',(request,response)=>{ //disp;ays yes or no 
    let inputValue = request.params.name.toLowerCase()
    if( inputValue === inputValue.split('').reverse().join('')){
        let result = 'Yes!'
        response.json(result)
    }else{
        let result = 'No!'
        response.json(result)
    }
})

//Put Method
app.put('/delete',(request,response)=>{ //updates result to empty string (reset)
    if( request === request){
        let result = 'Result:'
        response.json(result)
    }
})



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})







// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');
// const figlet = require('figlet')

// const server = http.createServer(function(req, res) {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if(page == '/') {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//     }
    // else if (page === '/api') {
    //     if('input' in params){
    //     if(params['input'] === params['input'].split('').reverse().join('')){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //         let result = 'Yes'
    //         console.log(result)
    //     res.end(JSON.stringify(result));
    //     }//a pali
    //     else{
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //         let result = 'No'
    //         console.log(result)
    //     res.end(JSON.stringify(result));
    //     }//not a pali
    //  }
//   }
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(8000);
