const socketio = require('socket.io');

let connectionPool = [];

const init = server => {
  const io = socketio(server);
  io.on('connection', socket => {
    // eslint-disable-next-line no-console
    console.log(`Socket connected, id: ${socket.id}`);

    connectionPool.push({ id: socket.id, socket });

    socket.on('close', () => {
      // eslint-disable-next-line no-console
      console.log(`Socket closed, id: ${socket.id}`);
      connectionPool = connectionPool.filter(({ id }) => id !== socket.id);
    });
  });
};

const emit = (message, payload) => {
  connectionPool.forEach(({ socket }) => {
    // eslint-disable-next-line no-console
    console.log(`Message "${message}" to socket with id: ${socket.id}`);
    socket.emit(message, payload);
  });
};

module.exports = {
  init,
  emit,
};
