const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('../sockets/sockets');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, { /* config */ });
  }

  socketConfiguration() {
    new Sockets(this.io);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static(path.resolve(__dirname, '../../public')));
  }

  execute(callback) {
    this.middlewares();
    this.socketConfiguration();
    this.server.listen(this.port, callback(this.port));
  }
}

module.exports = Server;
