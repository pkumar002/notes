# Application API

### **`app.mount:`**<br/>

Mounts the application instance in a container element.

`Syntax:`

```
app.mount(css selector or actual DOM element);
```

`Example:`

```
import { createApp } from 'vue'
const app = createApp(/* ... */)

app.mount('#app') // #app css id selector
```

Can also mount to an actual `DOM` element:

```
app.mount(document.body.firstChild)
```

### **`app.config:`**

Application instance exposes a `.config` object that allow us to configure a few app-level options.

`Example:`

```
import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(<App/>)


// config object
app.config.[handlers]

app.mount("#app")
```

**`1. app.config.errorHandler: `** <br/>
App level error handler that capture errors from all descendent components:

`Syntax:`

```
app.config.errorHandler = (err) => {
  /* handle error */
}
```

**`2. app.config.warnHandler: `** <br/>
Assign a custom handler for runtime warnings from Vue.

`Syntax:`

```
app.config.warnHandler = (msg, instance, trace) => {
  // `trace` is the component hierarchy trace
}
```

**`4. app.config.performance: `** <br/>
Set this to `true` to enable component init, compile, render and patch performance tracing in the browser devtool performance/timeline panel. Only works in `development` mode and in browsers that support the performance.mark API.

`Syntax:`

```
app.config.performance = true;
```

**`5. app.config.compilerOptions: `** <br/>
Configure `runtime compiler` options. Values set on this object will be passed to the in-browser template compiler and affect every component in the configured app

1. **`isCustomElement:`** <br/>
   Specifies a check method to recognize `native` custom elements.

   `Example:`

   ```
   // treat all tags starting with 'ion-' as custom elements
   app.config.compilerOptions.isCustomElement = (tag) => {
     return tag.startsWith('ion-')
   }
   ```

   Should return `true` if the tag should be treated as a native custom element. <br/> `Vue` will render it as a native element instead of attempting to resolve it as a Vue component.

2. **`whitespace:`** <br/>
   Adjusts template whitespace handling behavior.

   `Type`: 'condense' | 'preserve'

   `default` is condense.

   `Example:`

   ```
   app.config.compilerOptions.whitespace = 'preserve'
   ```

3. **`delimiters:`** <br/>
   Adjusts the delimiters used for text interpolation within the template.

   `Type`: [string, string]

   `default` is ['{{', '}}'].

   `Example:`

   ```
   app.config.compilerOptions.delimiters = ['${', '}']
   ```

   This is typically used to avoid conflicting with server-side frameworks that also use mustache syntax.

4. **`comments:`** <br/>
   Adjusts treatment of HTML comments in templates.

   `Type`: boolean

   `default` is false.

   `Example:`

   ```
   app.config.compilerOptions.comments  = true
   ```

   By default, Vue will remove the comments in production. Setting this option to true will force Vue to preserve comments even in production.

<br/>

**`6. app.config.globalProperties: `** <br/>
An `object` that can be used to register global properties that can be accessed on any component instance inside the application.

`Syntax:`

```
app.config.globalProperties.msg = 'hello'
```

This makes `msg` available inside any component template in the application, and also on `this` of any component instance:

`Example:`

```
export default {
  mounted() {
    console.log(this.msg) // 'hello'
  }
}
```
