const app = require('express')()
const server = require('http').createServer(app) // creeates web server

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
})

// listener for connection // socket is use to handle 
io.on('connection', (socket) => {
    socket.removeAllListeners()
    console.log(`user connected`)

    socket.on('disconnect', function () {
        socket.removeAllListeners();
        console.log('user disconnected');
      });

    socket.on('chatToServer', (data) => { // listens to 'chat' and prints to console
        io.emit('chatToClient', data) // sends data to listeners that listen to 'chatPrint'
    })


})
server.listen(8000)

// socket is on port 8000
// client must connect to port 8000 with socket io to send events from client
// concurrency with package.json to start both servers
// add on complexity of using more frameworks such as nextjs  
// learned more about how useful packages can be