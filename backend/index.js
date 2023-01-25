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