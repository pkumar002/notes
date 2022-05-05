# [Web storage api](#web-storage-api)
With web storage, web applications can store data locally within the user's browser.

Before `HTML5`, application data had to be stored in `cookies`, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

Unlike `cookies`, the storage limit is far larger (at `least 5MB`) and information is never transferred to the server.

<br/>

Web storage provides two objects for storing data on the client browser:
- window.`localStorage` - stores data with no expiration date.
- window.`sessionStorage` - stores data for one session (data is lost when the browser tab is closed).

`Session and Local storage` inherit property and methods from `Storage` interface.

<br/>

# [Storage](!storage)
Storage interface of the Web Storage API provides access to a particular domain's session or local storage.

**`Properties:`**
- **length**: Returns an integer representing the number of data items stored in the Storage object. 
```
Storage.prototype.length
```

**`Methods:`**

`setItem:` When passed a key name and value, will add that key to the storage.
```
 Storage.prototype.setItem('name','Pradeep')
```

`getItem:` When passed a key name, will return that key's value.
```
 Storage.prototype.getItem('name','Pradeep')
```

`removeItem:` When passed a key name, will remove that key from the storage.
```
 Storage.prototype.removeItem('name')
```

`key:` When passed a number n, this method will return the name of the nth key in the storage.
```
 function forEachKey(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}

// or with value

for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

`clear:` When invoked, will empty all keys out of the storage.
```
 Storage.prototype.clear()
```


# StorageEvent
The `StorageEvent` interface is implemented by the storage event, which is sent to a window when a storage area the window has access to is changed within the context of another document.

when a new window open and close, it detects the storage area.

It is a constructor

`Event <= Storage Event`

**`Properties:`**

- `Key:` 
<br/>Returns a DOMString that represents the key changed.<br/> 
The key attribute is null when the change is caused by the storage clear() method.

    ```
    window.addEventListener("storage", myFunction);

    function myFunction(event) {
        var x = "Key: " + event.key;
        document.getElementById("demo").innerHTML = x;
    }

    function changeValue() {
        var x = window.open("", "myWindow", "width=200,height=100");
        x.localStorage.setItem("mytime", Date.now());
        x.close();
    }
    ```

- `newValue:` <br/>The newValue property returns the new value of the changed storage item.
    ```
    window.addEventListener("storage", myFunction);

    function myFunction(event) {
        var x = "Key: " + new Date(+event.newValue).toString();
        document.getElementById("demo").innerHTML = x;
    }

    function changeValue() {
        var x = window.open("", "myWindow", "width=200,height=100");
        x.localStorage.setItem("mytime", Date.now());
        x.close();
    }
    ```

- `oldValue:` <br/>The newValue property returns the old value of the changed storage item.
    ```
    window.addEventListener("storage", myFunction);

    function myFunction(event) {
        var txt = "Key: " + event.key + "<br>";
        txt += "Old Value: " + event.oldValue + "<br>";
        txt += "New Value: " + event.newValue;
        document.getElementById("demo").innerHTML = txt;
    }

    function changeValue() {
        var x = window.open("", "myWindow", "width=200,height=100");
        x.localStorage.setItem("mytime", Date.now());
        x.close();
    }
    ```
- `StorageArea:`<br/>
The storageArea property returns the Storage Object of the changed storage item.

    ```
    window.addEventListener("storage", myFunction);

    function myFunction(event) {
        x = event.storageArea;
        console.log(event);
        document.getElementById("demo").innerHTML = JSON.stringify(x, null, 4);
    }

    function changeValue() {
        var x = window.open("", "myWindow", "width=200,height=100");
        x.localStorage.setItem("mytime", Date.now());
        x.close();
    }
    ```

**`Session Storage:`**
It maintains a seprate storage area for each given origin that's available for the duration of web page session (as long as browser open, including the page reloads and restores).

- Stores data only for a session, meaning that the data is stored until the browser (or table) closed.
- Data is never transferred to the server.
- Storage limit is larger than a cookie (at most 5MB)


This mechanism available via the `window.sessionStorage`

`Example:`

```
 // set key name=pradeep
 sessionStorage.setItem('name','Pradeep');

 // get key name
 sessionStorage.getItem('name')

 // clear key
 sessionStorage.removeItem('name')

 // clear all item
 sessionStorage.clear()

```



**`Local Storage:`**
It is does the same thing, but persist even when the browser closed or reopened.

- Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
- Storage limit is the maximum amongst the two (Session Storage or Cookie).