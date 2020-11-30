const {app, BrowserWindow} = require("electron");

let mainWindow

app.on("ready", () => {

  mainWindow = new BrowserWindow();
  mainWindow.loadFile("./src/index.html");
})