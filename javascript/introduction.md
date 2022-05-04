# Javascript
It is lightweight, interpreted or Just-in-time compiled programming language with [first-class function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function), While it is well known as scripting language for web pages, many non-browser also use it, such as `NodeJs`, `Apache CouchDB` and `Adobe acrobat`, Javascript is `Prototype` based, Multi paradigm, single threaded, dynamic language, supporting object oriented, impretive and declarative (e.g. functional programming) styles.

<br/>

## Standards
The standards for javascript are the `ECMA Script language specification` (ecma-262)

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