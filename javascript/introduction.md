# Javascript

It is lightweight, interpreted or Just-in-time compiled programming language with [first-class function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function), While it is well known as scripting language for web pages, many non-browser also use it, such as `NodeJs`, `Apache CouchDB` and `Adobe acrobat`, Javascript is `Prototype` based, Multi paradigm, single threaded, dynamic language, supporting object oriented, impretive and declarative (e.g. functional programming) styles.

<br/>

## Standards

The standards for javascript are the `ECMA Script language specification` (ecma-262)

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above).

<br/>

## Browser security

Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) --- this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website.

<br/>

## Javscript running order

When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom.

**`Example:`**

```
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}

```

<br/>

## Scripting load strategies

There are number of issues involved with getting scripts to load at the right time. A common problem is that all the HTML on a page is loaded in the order in which it appears. If you are using JavaScript to manipulate elements on the page (or more accurately, the Document Object Model), your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to.

in the internal and external examples the JavaScript is loaded and run in the head of the document, before the HTML body is parsed. This could cause an error

So we used some construct to get arround the code.

**`Example:`**

```
 document.addEventListener('DOMContentLoaded',()=>{

 })
```

This is an event listener, which listens for the browser's DOMContentLoaded event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired

## Defer Attribute

Which tells the browser to continue downloading the HTML content once the `<script>` tag element has been reached.

**`Example:`**

```
<script src="script.js" defer></script>
```

In this case both the script and the HTML will load simultaneously and the code will work. it only works for the external script.

<br/>

An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the `</body>` tag), so that it would load after all the HTML has been parsed. The problem with this solution is that `loading/parsing` of the script is completely blocked until the `HTML DOM` has been loaded. On larger sites with lots of `JavaScript`, this can cause a major `performance` issue, slowing down your site.

## Async and defer

There are actually two modern features we can use to bypass the problem of the blocking script — `async` and `defer`

**Async**: attribute will download the script without blocking the page while the script is being fetched
However, once the download is complete, the script will execute, which blocks the page from rendering.
You get no guarantee that scripts will run in any specific order. It is best to use `async` when the scripts in the page run independently from each other and depend on no other script on the page.
<br/>

**Defer**: Scripts loaded with the defer attribute will load in the order they appear on the page.

![Async and defer](./async-defer.jpg)

**`Async Example:`**

```
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>

```

You can't rely on the order the `scripts` will load in. `jquery.js` may load before or after `script2.js` and `script3.js `and if this is the case, any functions in those scripts depending on `jquery` will produce an error because `jquery` will not be defined at the time the script runs.

**`Defer Example:`**

```
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>

```

we can be sure that `jquery`.js will load before `script2.js` and `script3.js` and that `script2.js` will load before `script3.js`. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place.

<br/>

**`Summerize:`** <br/>

- `async` and `defer` both instruct the browser to download the script(s) in a `separate thread` while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.

- scripts with an `async` attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.

- scripts with a `defer` attribute will load in the order they are in and will only execute once everything has finished loading.

- If your scripts should be run immediately and they don't have any dependencies, then use `async`.
