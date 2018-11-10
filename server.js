const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log("made socket connection");

    socket.on("store", (data)=> {
        socket.broadcast.emit('store', data);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);