onconnect = function (e) {
  console.log(e)
}

onconnect = function (e) {
  var port = e.ports[0];
  port.onmessage = function (e) {
    console.log("eeee", e.ports)
    var workerResult = 'Result: ' + (e.data);
    port.postMessage(workerResult);
  }

}