import express from "express";
import WebSocket, { WebSocketServer } from 'ws'
const app = express();
const server = app.listen(5000, () => {
    console.log('Server is running')
});

app.get('/', (req, res) => {
    res.json({message: "Hello"}) 
})

const wss = new WebSocketServer({ server: server });
let userCount = 0;
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
    

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log("User conencted :", ++userCount)
  ws.send('Hello! Message From Server!!');
});

