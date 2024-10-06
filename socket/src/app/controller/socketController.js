const comment = require("./comment");

const socketController = (io) => {
  comment(io);
};
module.exports = socketController;
