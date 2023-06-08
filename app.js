const chttp=require('http');

  const server= http.createServer((req,res)=>{

           res.end('hello is good response ');

   });
   server.listen(5000);
