class Sockets {
  constructor(io) {
    this.io = io;
    this.io.on('connection', socket => {

      socket.on('message-of-client', ({ message }) => {
        io.emit('message-of-server', { message });
      });

    });
  }

  socketEvents() {

  }
}

module.exports = Sockets;
