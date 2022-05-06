const first = document.querySelector("#first");
const second = document.querySelector("#second");
const arr = [2, 4, 6]
const root = document.querySelector("#root")
if (window.Worker) {
    const ws = new Worker('./worker.js');
    ws.postMessage("data");
    ws.onmessage = function (ev) {
        const data = ev.data;
        for (let i = 0; i < data.length; i++) {
            const el = document.createElement("span");
            el.innerHTML = data[i].username + '<br/>';
            root.append(el)
        }
        console.log('worker response', ev.data)
    }
}

