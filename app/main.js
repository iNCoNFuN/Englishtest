var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;


// Quit when all windows are closed
app.on('window-all-closed', function() {
    app.quit();
});

// Event for when electron is ready
app.on('ready', function() {

  var appWindow, questionsWindow,settingsWindow, acercadeWindow;
  appWindow = new BrowserWindow({
    show: false
  });
  // Load up the main window
  appWindow.loadURL('file://' + __dirname + '/index.html');

  acercadeWindow = new BrowserWindow({
    width: 392,
    height: 202,
    show: false,
    transparent: true,
    frame: false
  });
  // Load acercade.html file up
  acercadeWindow.loadURL('file://' + __dirname + '/acercade.html');



  // Do the magic when the app is ready to show
  appWindow.once('ready-to-show', function() {
    appWindow.show(); //Show the main window
    // setTimeout(function() {
    //   acercadeWindow.show(); //Show it up after one second
    //   setTimeout(function() {
    //     acercadeWindow.hide(); //Hide it up after three
    //   }, 2000);
    // }, 500);
  });

//Open acercadeWindow
ipc.on('abrirAcercadeWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  acercadeWindow.show();
});
//Close acercadeWindow
ipc.on('closeAcercadeWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  acercadeWindow.hide();
});

//Open questionsWindow
ipc.on('abrirQuestionsWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  // Load up the main window
  questionsWindow = new BrowserWindow({
    // show: false
  });
  questionsWindow.loadURL('file://' + __dirname + '/questions.html');
  // questionsWindow.show();
});
//Close questionsWindow
ipc.on('closeQuestionsWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  // questionsWindow.hide();
});

//Open settingsWindow
ipc.on('abrirSettingsWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  settingsWindow = new BrowserWindow({});
  settingsWindow.loadURL('file://' + __dirname + '/settings.html');
});

//Cerrar completamente la app al pulsar la X
appWindow.on('close', function() {
  app.quit();
});


});
