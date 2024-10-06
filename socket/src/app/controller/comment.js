// src/app/controller/socketEvents.js
const userSockets = {};

const comment = (io) => {
  io.on("connection", (socket) => {
    // Lưu trữ socket của người dùng
    socket.on("registerUser", (userId) => {
      userSockets[userId] = socket.id;
      console.log("người dùng kết nối", userSockets[userId]);
    });

    socket.on("newComment", (comment) => {
      const { fullName, ownerId } = comment;
      console.log(fullName);

      // Phát sự kiện 'commentReceived' tới tất cả các client để cập nhật bình luận
      io.emit("commentReceived", comment);

      // Phát sự kiện 'notifyOwner' chỉ tới chủ story
      io.to(ownerId).emit(
        "notifyOwner",
        `${fullName} Someone commented on your story.`
      );
    });

    socket.on("disconnect", () => {
      //   console.log("User disconnected");
      // Xóa socket khi người dùng ngắt kết nối
      for (const userId in userSockets) {
        if (userSockets[userId] === socket.id) {
          delete userSockets[userId];
          break;
        }
      }
    });
  });
};

module.exports = comment;
