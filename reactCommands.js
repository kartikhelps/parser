const sh = require("shelljs");
const fs = require("fs");

function executeReactCommands(sheetData,templateCreator) {
  sh.exec("npm install -g vite");
  sh.exec("npm create vite@latest myapp -- --template react");
  fs.copyFileSync("./templates/package.hbs", "./myapp/package.json");
  sh.cd("./myapp");
  sh.exec("npm i");
  sh.cd("..");
  templateCreator(sheetData, "./templates/app.hbs", "App.jsx", "./myapp/src/")
  // Other commands if necessary
}

module.exports = executeReactCommands;
