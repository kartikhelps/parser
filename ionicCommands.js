const sh = require("shelljs");

function executeIonicCommands() {
  sh.exec("npm install -g @ionic/cli");
  sh.exec("ionic start androidapp blank --type=react");
  // Other commands if necessary
}

module.exports = executeIonicCommands;
