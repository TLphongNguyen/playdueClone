// src/app/controller/socketEvents.js
const handleLogin = require("./login");
const socketManager = require("../../utils/manager");

const comment = (io) => {
  io.on("connection", (socket) => {
    handleLogin(socket, io);

    socket.on("newComment", (comment) => {
      io.emit("commentReceived", comment);
    });

    socket.on("newNotification", (notification, toUser) => {
      const recipientSockets = socketManager.getUserSockets(toUser);
      if (recipientSockets.length > 0) {
        recipientSockets.forEach((socketId) => {
          io.to(socketId).emit("notifyOwner", notification);
        });
      } else {
        console.log(`User ${toUser} not found.`);
      }
    });
  });
};

module.exports = comment;
