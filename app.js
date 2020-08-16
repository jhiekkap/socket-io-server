const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors');
const port = process.env.PORT || 4001;

console.log('PORTTI', port)

const index = require("./routes/index");

const app = express();
app.use(cors());
//app.use(index);
app.use(express.static('build'));

const server = http.createServer(app);

const io = socketIo(server);

let interval;


io.on('connection', socket => {
    //Get the chatID of the user and join in a room of the same chatID
    chatID = socket.handshake.query.chatID
    socket.join(chatID)
    console.log('CHAT ID', chatID)
    //Leave the room if the user closes the socket
    socket.on('disconnect', () => {
        socket.leave(chatID)
    })

    //Send message to only a particular user
    socket.on('send_message', message => {
        receiverChatID = message.receiverChatID
        senderChatID = message.senderChatID
        content = message.content

        console.log('SENDER', senderChatID)
        console.log('RECEIVER', receiverChatID)
        console.log('CONTENT', content)
        //Send message to only that particular room
        //io.emit('receive_message', 'HELLO')
        socket.to(receiverChatID).emit('receive_message', {
            'content': content,
            'senderChatID': senderChatID,
            'receiverChatID': receiverChatID,
        })
    })
});


/* io.on("connection", (socket) => {
    //console.log('SOCKET ID', socket.id)
    console.log("New client connected");
   
    socket.on('chat message', function (msg) { 
        console.log(msg  )
       io.emit('chat message', msg );
    });
  
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
}); */



server.listen(port, () => console.log(`Listening on port ${port}`));
