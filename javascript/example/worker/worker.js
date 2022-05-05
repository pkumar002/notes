// self.addEventListener('message', (ev) => {
//     console.log('worker event', ev)
//     const data = ev.data
//     self.postMessage(data.map(x => x ** x))
// })

// self.addEventListener("keydown", ev => {
//     const data = ev.data;
//     console.log('data', data)
// })

self.onmessage = function (e) {
    self.postMessage(e.data.map(x => x * x))
}