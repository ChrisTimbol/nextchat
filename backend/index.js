const app = require('express')()
const server = require('http').createServer(app) // creeates web server


// accept every1 connecting 
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
})

// listener for connection // socket is use to handle 
io.on('connection', (socket) => {
  
    socket.on('messageToServer', (data) => { // listens to 'chat' and prints to console
        io.emit('messageToClient', data) // sends data to listeners that listen to 'chatPrint'
    })


/*     socket.on('disconnect', function () { // disconnect
        console.log('user disconnected');
    }); */

})
server.listen(8000)

