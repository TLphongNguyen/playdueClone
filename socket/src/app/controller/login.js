// src/app/controller/login.js
const socketManager = require("../../utils/manager");

const handleLogin = (socket, io) => {
  // Xử lý đăng ký socket khi người dùng đăng nhập
  socket.on("registerUser", (userId) => {
    socketManager.registerSocket(userId, socket.id);
    console.log(`User ${userId} registered with socket ${socket.id}`);
  });

  // Xử lý khi socket ngắt kết nối
  socket.on("disconnect", () => {
    socketManager.unregisterSocket(socket.id);
    console.log(`Socket ${socket.id} disconnected.`);
  });
};

module.exports = handleLogin;
