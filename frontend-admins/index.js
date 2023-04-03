const { app, BrowserWindow } = require('electron')
const path = require('path')

function createLoginWindow() {

  let loginWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })


  loginWin.loadFile('login.html')
}


app.on('ready', createLoginWindow)