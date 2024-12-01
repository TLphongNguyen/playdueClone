const handleLogin = require("./login");
const socketManager = require("../../utils/manager");

const message = (io) => {
  io.on("connection", (socket) => {
    handleLogin(socket, io);
    socket.on("sendMessage", (message) => {
      console.log(message);

      io.emit("receiveMessage", message);
    });
  });
};
module.exports = message;
