// Dieser Listerner reagiert darauf, dass cordova startklar ist:
document.addEventListner("deviceready", meineStartfunktion, false);
dokument.addEventListner("orientationchange", andererBildschirm, false);

function meineStartfunktion(){
  document.getElementById("ausgabe").innerHTML = "Cordova App gestartet.";

}

function andererBildschirm() {
 document.getElementById("ausgabe").innerHTML = "window.orientation:"+window.orientation;

}
