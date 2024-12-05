const handleLogin = require("./login");
const socketManager = require("../../utils/manager");

const message = (io) => {
  io.on("connection", (socket) => {
    handleLogin(socket, io);
    socket.on("sendMessage", (message) => {
      io.emit("receiveMessage", message);
    });
    socket.on("sendMessagePrivate", (message) => {
      io.emit("receiveMessagePrivate", message);
    });
  });
};
module.exports = message;
