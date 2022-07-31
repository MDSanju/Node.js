const EventEmitter = require("events");
const uuid = require("uuid");

const randomId = uuid.v4();
const otp = randomId.slice(0, 8);

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: otp, msg });
  }
}

module.exports = Logger;
