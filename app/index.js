var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

// Event for when electron is ready
app.on('ready', function() {

  var appWindow, questionsWindow, acercadeWindow;
  appWindow = new BrowserWindow({
    show: false
  });
  // Load up the main window
  appWindow.loadURL('file://' + __dirname + '/index.html');


  // Load up the main window
  questionsWindow = new BrowserWindow({
    show: false
  });
  questionsWindow.loadURL('file://' + __dirname + '/questions.html');

  acercadeWindow = new BrowserWindow({
    width: 384,
    height: 232,
    show: false,
    transparent: true,
    frame: false
  });
  // Load acercade.html file up
  acercadeWindow.loadURL('file://' + __dirname + '/acercade.html');



  // Do the magic when the app is ready to show
  appWindow.once('ready-to-show', function() {
    appWindow.show(); //Show the main window
    //questionsWindow.show(); //Show the questions window
    // setTimeout(function() {
    //   acercadeWindow.show(); //Show it up after one second
    //   // setTimeout(function() {
    //   //   acercadeWindow.hide(); //Hide it up after three
    //   // }, 3000);
    // }, 1000);
  });

//Abrir acercadeWindow
ipc.on('abrirAcercadeWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  acercadeWindow.show();
});
//Close acercadeWindow
ipc.on('closeAcercadeWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  acercadeWindow.hide();
});

//Abrir questionsWindow
ipc.on('abrirQuestionsWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  questionsWindow.show();
});
//Close questionsWindow
ipc.on('closeQuestionsWindow', function(event, arg){
  event.returnValue=''; //Turn back an empty value
  questionsWindow.hide();
});

});
