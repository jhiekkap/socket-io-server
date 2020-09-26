const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors');
const port = process.env.PORT || 4001;
const app = express();
app.use(cors());
app.use(express.static('build'));
const server = http.createServer(app);
const io = socketIo(server);


io.on('connection', socket => {
    //Get the chatID of the user and join in a room of the same chatID
    chatID = socket.handshake.query.chatID
    socket.join(chatID)
    console.log('CHAT ID', chatID)
    //Leave the room if the user closes the socket
    socket.on('disconnect', () => {
        socket.leave(chatID)
    })
    socket.on('send_message', message => {
        const { receiverChatID, senderChatID, content, recipients, type, videoStream, emoji } = message

        /* console.log('SENDER', senderChatID)
        console.log('RECEIVER', receiverChatID)
        console.log('CONTENT', content)
        console.log('RECIPIENTS', recipients)
        console.log('TYPE', type)
        console.log('EMOJI', emoji) */

        const emittedMessage = {
            'senderChatID': senderChatID,
            'receiverChatID': 'Kaikki',
            'content': content,
            'videoStream': videoStream,
            'emoji': emoji,
        }

        if (recipients === 'ALL') {
            socket.broadcast.emit('receive_message', emittedMessage)
        } else {
            socket.to(receiverChatID).emit('receive_message', emittedMessage)
        }
    })
});

server.listen(port, () => console.log(`Listening on port ${port}`));
