const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors()); // Cho phép tất cả yêu cầu từ các domain khác
const socketController = require("./src/app/controller/socketController");
const server = http.createServer(app); // Tạo HTTP server
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173", // Cho phép kết nối từ client tại localhost:3000
  },
});
const PORT = process.env.PORT || 8000; // Sử dụng cổng từ biến môi trường hoặc cổng 8000
socketController(io);
// io.on("connection", (socket) => {
//   // Xử lý sự kiện bình luận story
//   socket.on("sendComment", ({ storyId, customerId, content }) => {
//     // Giả sử chúng ta có hàm lưu bình luận vào database
//     saveCommentToDatabase(storyId, customerId, content).then((comment) => {
//       const storyOwner = getStoryOwner(storyId);
//       if (storyOwner) {
//         io.to(storyOwner.socketId).emit("getNotification", {
//           content: `Bạn có một bình luận mới: "${content}" trên story của bạn.`,
//         });
//       }
//       io.emit("receiveComment", {
//         storyId,
//         customerId,
//         content,
//         time: new Date(),
//       });
//     });
//   });
// });
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
