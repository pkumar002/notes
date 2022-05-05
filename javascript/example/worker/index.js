const first = document.querySelector("#first");
const second = document.querySelector("#second");
const arr = [2, 4, 6]
if (window.Worker) {
    const ws = new Worker('./worker.js');

    ws.postMessage(arr);
    ws.onmessage = function (ev) {
        console.log('worker response', ev)
    }
}