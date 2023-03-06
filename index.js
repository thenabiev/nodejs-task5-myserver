let http=require('http');


const myServer=http.createServer((req, res)=>{

    const url=req.url;

    switch (url){
        case "/":
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write("<h2>Welcome to home page</h2>")
            break;

        case "/about":
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write("<h2>ABOUT</h2>")
            break;
        
        case "/contact":
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write('<h2>CONTACT</h2>');

        default : 
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write("<h2>ERROR 404 : Page not found</h2>")
    }

    res.end();
})


let port = 5000 ;
myServer.listen(port, ()=>{
    console.log(`Server ${port} nömrəli port üzərində aktivləşdi`);
}) ;