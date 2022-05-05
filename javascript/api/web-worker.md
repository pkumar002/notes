# [Web worker api](#web-worker-api)
Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application.

The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being `blocked/slowed` down.

A `worker` is an `object` created using a constructor (e.g. `Worker()`)

You can run almost any code you like inside a worker thread (such as String, Array, Object, JSON, etc.).

There are some `exceptions`: for example, you can't directly manipulate the `DOM` from inside a `worker`, or use some default methods and properties of the `window` object.

Data is sent between `workers` and the `main` thread via a system of messages — both sides send their messages using the `postMessage()` method and respond to messages via the `onmessage` event handler (the message is contained within the Message event's `data` property). The data is copied rather than shared.

## [Types of worker](#types-of-worker)
There are number of different types of workers.

- `Dedicated workders:` They are workers that are utilized by a single script. this context is represent by `DedicatedWorkerGlobalScope`.

- `Shared workers:` They are workers that can be utilized by multiple scripts running in different windows, IFrames, etc. as long as they are in the same domain as the worker. They are a little more complex than dedicated workers — scripts must communicate via an active port

- `Service workers:` They essentially act as proxy servers that sit between web application, the browser, and the network (when available). 

   - They are intended, among other things, to enable the creation of effective offline experiences.
   - intercept network requests and take appropriate action based on whether the network is available and update assets residing on the server. 
   - They will also allow access to push notifications and background sync APIs.


## Worker global contexts and function
Workers run in a different `global context` than the current `window`! While `Window` is not directly available to workers, many of the same methods are defined in a shared mixin (`WindowOrWorkerGlobalScope`), and made available to workers through their own `WorkerGlobalScope`-derived contexts:

- `DedicatedWorkerGlobalScope` for dedicated workers
- `SharedWorkerGlobalScope` for shared workers
- `ServiceWorkerGlobalScope` for service workers

Following functions are only available to workers.

1. WorkerGlobalScope.importScripts() (all workers),
2. DedicatedWorkerGlobalScope.postMessage (dedicated workers only).