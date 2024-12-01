const handleLogin = require("./login");
const socketManager = require("../../utils/manager");

const profile = (io) => {
  io.on("connection", (socket) => {
    handleLogin(socket, io);
    socket.on("notificationFollow", (notificationFlollow) => {
      const recipientSockets = socketManager.getUserSockets(toUser);
      if (recipientSockets.length > 0) {
        recipientSockets.forEach((socketId) => {
          io.to(socketId).emit("notifyOwnerFollow", notificationFlollow);
        });
      } else {
        console.log(`User ${toUser} not found.`);
      }
    });
  });
};

module.exports = profile;
