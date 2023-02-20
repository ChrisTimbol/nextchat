const app = require('express')()
const server = require('http').createServer(app) // creeates web server

const users = []
// accept every1 connecting 
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
})

// listener for connection // socket is use to handle 
io.on('connection', (socket) => {
    socket.removeAllListeners()
    console.log(`user connected`)

    socket.on('disconnect', function () { // disconnect
        console.log('user disconnected');
      });

    socket.on('chatToServer', (data) => { // listens to 'chat' and prints to console
        io.emit('chatToClient', data) // sends data to listeners that listen to 'chatPrint'
    })

    socket.on('newUser', function(nickname){
        socket.nickname = nickname
        users.push(socket.nickname)
        console.log(socket.nickname)
        io.emit('nicknameToClient', socket.nickname)
    })

})
server.listen(8000)

// socket is on port 8000
// client must connect to port 8000 with socket io to send events from client
// concurrency with package.json to start both servers