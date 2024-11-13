// src/app/controller/socketEvents.js
const userSockets = {};

const comment = (io) => {
  io.on("connection", (socket) => {
    socket.on("registerUser", (userId) => {
      if (!userSockets[userId]) {
        // Nếu userId chưa tồn tại trong object, khởi tạo một mảng rỗng
        userSockets[userId] = [];
      }

      // Kiểm tra nếu socket.id đã tồn tại trong mảng hay chưa
      if (!userSockets[userId].includes(socket.id)) {
        userSockets[userId].push(socket.id); // Thêm socket ID vào user nếu chưa tồn tại
        console.log(`User ${userId} registered with socket ${socket.id}`);
      } else {
        console.log(
          `Socket ${socket.id} is already registered for user ${userId}`
        );
      }
    });
    socket.on("newComment", (comment) => {
      io.emit("commentReceived", comment);
    });
    socket.on("newNotification", (notification, toUser) => {
      const recipientSockets = userSockets[toUser];
      if (recipientSockets) {
        recipientSockets.forEach((socketId) => {
          console.log(toUser);
          io.to(socketId).emit("notifyOwner", notification);
        });
      } else {
        console.log(`User ${toUser} not found.`);
      }
    });
    socket.on("disconnect", () => {
      for (const userId in userSockets) {
        if (userSockets[userId] === socket.id) {
          delete userSockets[userId];
          break;
        }
      }
    });
  });
};
const notificationComment = (io) => {};

module.exports = comment;
