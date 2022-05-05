
const ws = new Worker('./worker.js');
ws.addEventListener('message', console.log)
ws.addEventListener("error", console.log)
ws.postMessage("one");

document.body.addEventListener('keydown', () => {
    ws.postMessage('I have press the key')
})

