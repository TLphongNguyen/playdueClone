const comment = require("./comment");
const profile = require("./profile");
const message = require("./message");

const socketController = (io) => {
  comment(io);
  profile(io);
  message(io);
};
module.exports = socketController;
