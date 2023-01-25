const app = require('express')()
const server = require('http').createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
io.on('connection', (socket) => {
    console.log(`user connected`)

    socket.on('disconnect', function () {
        console.log('user disconnected');
      });
})
server.listen(8000)

// socket is on port 8000
// client must connect to port 8000 with socket io to send events from client