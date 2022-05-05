self.addEventListener('message', (ev) => {
    console.log('worker event', ev)
    const data = ev.data;
    const sum = () => 9 + 8
    switch (data) {
        case 'one':
            self.postMessage(sum())
            break;
        default:
            break;
    }
})

self.addEventListener("keydown", ev => {
    const data = ev.data;
    console.log('data', data)
})

