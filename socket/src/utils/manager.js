// src/app/socketManager.js
const userSockets = {};

// Hàm thêm socket ID vào user
const registerSocket = (userId, socketId) => {
  if (!userSockets[userId]) {
    userSockets[userId] = [];
  }
  if (!userSockets[userId].includes(socketId)) {
    userSockets[userId].push(socketId);
  }
};

// Hàm xóa socket ID
const unregisterSocket = (socketId) => {
  for (const userId in userSockets) {
    const index = userSockets[userId].indexOf(socketId);
    if (index !== -1) {
      userSockets[userId].splice(index, 1);
      if (userSockets[userId].length === 0) {
        delete userSockets[userId];
      }
      break;
    }
  }
};

// Lấy danh sách socket của một user
const getUserSockets = (userId) => {
  return userSockets[userId] || [];
};

module.exports = {
  registerSocket,
  unregisterSocket,
  getUserSockets,
};
