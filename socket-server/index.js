const express =  require('express');
const http =  require('http');
const WebSocket =  require('ws');

const app = express();
//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {

    //connection is up, let's add a simple simple event
    // ws.on('message', (message) => {

        //log the received message and send it back to the client
    //     console.log('received: %s', message);
    //     ws.send(`Hello, you sent -> ${message}`);
    // });
     
     setInterval(() => {
        ws.send(`${new Date().toLocaleDateString('en-GB',{hour:'2-digit',hour12:true})} 
                :${new Date().getMinutes()}
                :${new Date().getSeconds()}`);
     }, 1000);

    //send immediatly a feedback to the incoming connection    
    
});


server.listen(1616,()=>{
    console.log("Socket Server Started");
})