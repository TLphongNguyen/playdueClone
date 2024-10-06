const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
const socketController = require("./src/app/controller/socketController");
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
module.exports = { io };
const PORT = process.env.PORT || 8000;
socketController(io);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
