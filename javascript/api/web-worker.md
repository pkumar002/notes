# [Web worker api](#web-worker-api)

Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application.

The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being `blocked/slowed` down.

A `worker` is an `object` created using a constructor (e.g. `Worker()`)

You can run almost any code you like inside a worker thread (such as String, Array, Object, JSON, etc.).

There are some `exceptions`: for example, you can't directly manipulate the `DOM` from inside a `worker`, or use some default methods and properties of the `window` object.

Data is sent between `workers` and the `main` thread via a system of messages — both sides send their messages using the `postMessage()` method and respond to messages via the `onmessage` event handler (the message is contained within the Message event's `data` property). The data is copied rather than shared.

<br/>

## [Worker()](#worker)

The worker() constructor creates a `Worker` object that executes the script at the specified URL. The script must obey the `same-origin-policy`.

**`Syntax:`**

```
 const ws = new Workder(aURL, options)
```

#### Parameters

- `aURL:` URL of the script the worker will execute. must obey the same origin-policy.
- `Options:` <br/>

  - `type:` specifying the type of worker to create, the value can be `classic` or `module`. default value is `classic`
  - `credentials:` specifying the type of credentials to use for the workder. The value can be `omit`, `same-origin`, or `include`. If not specified, or if type is `classic`, the default used is `omit`
  - `name:` specifying an identifying name for the `DedicatedWorkerGlobalScope` representing the scope of the worker, which is mainly useful for `debugging` purposes.

#### Exceptions

- `SecurityError:` Thrown if the document is not allowed to start workers. e.g. if the URL has an invalid syntax or if the same-origin policy is violated.
- `NetworkError:` Thrown if the `MIME` type of the worker script is incorrect. It should always be `text/javascript`.
- `SyntaxError:` Thrown if aURL cannot be parsed.

<br/>

### [Types of worker](#types-of-worker)

There are number of different types of workers.

- `Dedicated workders:` They are workers that are utilized by a single script. this context is represent by `DedicatedWorkerGlobalScope`.

- `Shared workers:` They are workers that can be utilized by multiple scripts running in different windows, IFrames, etc. as long as they are in the same domain as the worker. They are a little more complex than dedicated workers — scripts must communicate via an active port

- `Service workers:` They essentially act as proxy servers that sit between web application, the browser, and the network (when available).

  - They are intended, among other things, to enable the creation of effective offline experiences.
  - intercept network requests and take appropriate action based on whether the network is available and update assets residing on the server.
  - They will also allow access to push notifications and background sync APIs.

<br/>

### [Worker global contexts and function](#worker-global-contexts-and-function)

Workers run in a different `global context` than the current `window`! While `Window` is not directly available to workers, many of the same methods are defined in a shared mixin (`WindowOrWorkerGlobalScope`), and made available to workers through their own `WorkerGlobalScope`-derived contexts:

- `DedicatedWorkerGlobalScope` for dedicated workers
- `SharedWorkerGlobalScope` for shared workers
- `ServiceWorkerGlobalScope` for service workers

Following functions are only available to workers.

1. WorkerGlobalScope.importScripts() (all workers),
2. DedicatedWorkerGlobalScope.postMessage (dedicated workers only).

<br/>

### [Steps to use web worker](#steps-to-use-web-worker)

- `First:` create worker.js file in your folder.
- `Second:` main.js file create a worker process using `new Worker(filename)`

  **`main.js`**

  ```
    // worker created
    const ws = new Workder('./worker.js')

   // post message to worker.js
    ws.postMessage('Hello World');

   // listen response
    ws.onmessage=function(e){
       console.log(e.data)
    }

  ```

  **`worker.js`**

  ```
  self.addEventListener("message",(ev)=>{
     const data = ev.data;
     self.postMessage(data + "Pradeep Kumar")
  })
  ```

<br/>

### [Dedicated workers](#dedicated-workers)

A dedicated worker only accessible by the script that called it.

**`Worker feature detection`**

**`Example:`**

```
if(window.Worker){
  // create worker here
}
```

Spawning a dedicated worker

**`Example:`**

```
var myWorker = new Worker('worker.js');
```

Sending message to and from a dedicated worker

**`Example:`**

```
const result = document.querySelector("#result")
const input = document.querySelector("#input"); // select element

input.onchange=function(e){
  myWorker.postMessage(e.target.value) // send message to the worker thread
}
```

In the worker, we can respond when the message is received.

**`Example:`**

```
onmessage = function(ev) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (ev.data);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}

or

self.addEventListener("message",(ev)=>{
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (ev.data);
  console.log('Posting message back to main script');
  postMessage(workerResult);
})
```

Receive the response in main thread

**`Example:`**

```
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
```

**`Terminate a worker:`**
If you need to immediately terminate a running worker from the main thread.

```
myWorker.terminate();
```

### [Importing scripts and libraries](#importing-scripts-and-libraries)

Worker threads have access to a global function, `importScripts()`, which lets them import scripts. It accepts zero or more URIs as parameters to resources to import;

```
importScripts();                         /* imports nothing */
importScripts('foo.js');                 /* imports just "foo.js" */
importScripts('foo.js', 'bar.js');       /* imports two scripts */
importScripts('//example.com/hello.js'); /* You can import scripts from other
```

If the script can't be loaded, `NETWORK_ERROR` is thrown, and subsequent code will not be executed.

<br/>

### [Shared workers](#shared-workers)

A shared worker is accessible by `multiple` scripts — even if they are being accessed by different windows, iframes or even workers.

`Note:` If `SharedWorker` can be accessed from several browsing contexts, all those browsing contexts must share the exact `same origin `(same protocol, host, and port).

#### Spawning a shared worker:

**`Syntax:`**

```
 const ws = new SharedWorker('worker.js')
```

`Note:` One big difference is that with a shared worker you have to communicate via a `port` object. — an explicit port is opened that the scripts can use to communicate with the worker

The port connection needs to be started either implicitly by use of the `onmessage` event handler or explicitly with the `start()`

`Port` object has two key.

1. onmessage,
2. onmessageerror

<br/>

#### Sending messge to and from a shared worker:

**`Example:`**

```
 ws.port.postMessage("Hello World, I am a shared worker");
```

#### Worker receive the message

**`Example:`**

```
onconnect = function (e) {
  var port = e.ports[0];
  port.onmessage = function (e) {
    console.log("eeee", e.ports)
    var workerResult = 'Result: ' + (e.data);
    port.postMessage(workerResult);
  }
}
```

We use the `ports` attribute of this event object to grab the port and store it in a variable.

<br/>

#### Content security policy:

Worker are considered to have their own execution context distinct from the document that created.

```
Content-Security-Policy: script-src 'self'
```
