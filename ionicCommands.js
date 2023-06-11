const sh = require("shelljs");

function executeIonicCommands(sheetData,templateCreator) {
  sh.exec("npm install -g @ionic/cli");
  console.log("1")

  sh.exec("ionic start androidapk blank --type=react");
console.log("2")
  templateCreator(sheetData, "./templates/ionic/app.hbs", "App.tsx", "./androidapk/src/")
  sh.exec("npm install")
console.log("3")
  sh.cd("./androidapk")
    console.log("4")
  sh.exec("npm install @capacitor/core @capacitor/cli")
    console.log("5")
  sh.exec("npx cap init")
    console.log("6")
  sh.exec("npm install @capacitor/android")
    console.log("7")
  sh.exec("ionic init")
    console.log("8")
  sh.exec("ionic build")
    console.log("9")
  sh.exec("npx cap add android")
    console.log("10")
  sh.cd("./android")
    console.log("10")
  sh.exec("gradlew assembleRelease")

 const { execSync } = require('child_process');

const command = 'C:\\Users\\keven\\AppData\\Local\\Android\\Sdk\\build-tools\\31.0.0\\apksigner';
const password = 'android';
const args = [
  'sign',
  '--ks',
  'C:\\Users\\Public\\Documents\\androidkey.jks',
  `--ks-pass pass:${password}`,
  '--out',
  'trail1.apk',
  './/app//build//outputs//apk//release//app-release-unsigned.apk',
];

try {
  const childProcess = execSync(`${command} ${args.join(' ')}`, {
    stdio: 'inherit',
  });
} catch (error) {
  console.error(error.message);
}


    console.log("12")


}

module.exports = executeIonicCommands;



