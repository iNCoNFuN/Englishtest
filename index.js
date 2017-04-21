var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

// Event for when electron is ready
app.on('ready', function() {

  var appWindow, acercadeWindow;
  appWindow = new BrowserWindow({
    show: false
  });

  // Load up the main window
  appWindow.loadURL('file://' + __dirname + '/index.html');
  acercadeWindow = new BrowserWindow({
    width: 384,
    height: 232,
    show: false
  });

  // Load acercade.html file up
  acercadeWindow.loadURL('file://' + __dirname + '/acercade.html');


  // Do the magic when the app is ready to show
  appWindow.once('ready-to-show', function() {
    appWindow.show(); //Show the main window
    setTimeout(function() {
      acercadeWindow.show(); //Show it up after one second
      setTimeout(function() {
        acercadeWindow.hide(); //Hide it up after three
      }, 3000);
    }, 1000);
  });

});
