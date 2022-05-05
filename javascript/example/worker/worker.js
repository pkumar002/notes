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
    const data = e.data;
    switch (data) {
        case 'data':
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(result => self.postMessage(result))
                .catch(error => self.postMessage(error.message))
            break;
        case 'quare':
            self.postMessage(e.data.map(x => x * x))
            break;
        default:
            self.postMessage('No input')
            break;
    }
}