// const messageController = require('./messageController');
// const userController = require('./userController');

const socketController = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Gọi các controller khác nhau
    // messageController(socket, io);
    // userController(socket, io);

    // Các sự kiện khác nếu có
  });
};
export default socketController;
