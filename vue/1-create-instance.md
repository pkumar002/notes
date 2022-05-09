# Creating a Vue Application

Create a new instance with the `createApp` function.

**`Example:`**

```
import {createApp} from 'vue';
import App from './App/App.vue';

// application instance
const app = createApp(<App/>)


// mount
app.mount("#app") // #app is a css id selector

```

`App` is root component that we passed into the `createApp(<App/>)`.

<br/>

**`Mounting the app`**

- An application `instance` won't render anything until its `.mount()` method is called.
- The `.mount()` method should always be called after all app `configurations` and asset `registrations` are done.

<br/>

**`In-DOM Root Component Template:`**<br/>
Using `vue` without a build step, we can write our root component's template directly inside the mount container:

**`Example:`**

```
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>


<script>
  import { createApp } from 'vue'

  const app = createApp({
    data() {
      return {
        count: 0
      }
    }
  })

  app.mount('#app')
</script>
```
