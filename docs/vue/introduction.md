# VUE

Vue is a javascript framework for building user interfaces. It builts on top of `HTML`, `CSS` and `Javascript` and provide `declarative` and `component` based model that helps you efficently `develop` user interface.

<br/>

## Vue core engine

`Vue` has 3 core modules.

1. Reactivity module.
2. Compiler module.
3. Renderer module.

**`1. Reactivity module:`** <br/>
Allow us to create js reactive object that can be watched for changes.

**`Example:`**

```
  export default {
    template:`<span>{{count}} - {{name}}</span>`,
    data(){
      return{
        count:0,
        name:'pradeep'
      }
    }
  }
```

`data` object is connected to reactivity, if you change anything on data object, it will autometically update into the dom.

**`2. Compiler module:`** <br/>
This takes html template and compile into render function.

template => render function

- Can happen in the browser at runtime.
- Can happen when `vue` project is `build`.

**`Example`**

```
 <template>
  <div class="container">
    <span>Hello World!</span>
  </div>
 </template>
```

convert into `render` function

```
 function render(){
   return h("div",{class:"container"},[
      h("span","Hello World!")
   ])
 }
```

**`3. Renderer module:`**
It has 3 phase

1. Render phase.
2. Mount phase.
3. Patch phase.

   **Render Phase:** </br>
   Render function called and return `vertual dom`. <br/>

   **`Example:`**

   ```
   const vdom = {
     tag:"div",
     props:{class:"container"},
     children:[
       {
         tag:"span",
         children:"Hello World"
       }
     ]
   }
   ```

   **Mount Phase** <br/>
   Takes the `virtual dom` and create dom to display on webpage.

   **Patch phse** <br/>
   It takes old `vdom` and new `vdom` and compare both and update only the part of web page which has changed using dom js called.
