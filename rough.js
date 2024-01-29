const http = require('http');


http.createServer((req, resp) =>{
    resp.write("<h1>Hello I am Sharmila, How are you</h1>")
    resp.end();
}).listen(5000); 


/*function dataControl(req,resp)
{
    resp.write("<h1>Hello I am Sharmila,How are you</h1>")
    resp.end();
}
http.createServer(dataControl).listen(5000);*/

/*function test(a)
{
    return a+100;
}
const test=(a) => a+10 */