if (!!window.SharedWorker) {
  const sw = new SharedWorker("worker.js");
  sw.port.postMessage("Shared Worker")
  console.log(sw)

  sw.port.onmessage = function (e) {
    console.log('ee = ', e)
  }
}

