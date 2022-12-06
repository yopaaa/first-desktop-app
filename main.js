const { app, BrowserWindow, globalShortcut, Menu } = require("electron");
const path = require("path");

const createWindow = (file) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minheight: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(file);
};

Menu.setApplicationMenu(null);

app.whenReady().then(() => {
  createWindow("./page/index.html");

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("browser-window-focus", function () {
  // globalShortcut.register("CommandOrControl+R", () => {
  //     console.log("CommandOrControl+R is pressed: Shortcut Disabled");
  // });
  // globalShortcut.register("F5", () => {
  //   console.log("F5 is pressed: Shortcut Disabled");
  // });
  // globalShortcut.register("Super+R", () => {
  //   console.log("F5 is pressed: Shortcut Disabled");
  // });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
