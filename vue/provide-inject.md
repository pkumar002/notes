# Provide / Inject

When we need to pass data from the `parent` to a `child` component, we use `props`.

**`imagine :`** <br/>
The case where we have a large component tree, and a deeply nested component needs something from a distant ancestor component. With only props, we would have to pass the same prop across the entire parent chain:

![prop drilling](./prop-drilling.11201220.png)

We can solve props drilling with `provide` and `inject`.

- A `parent` component can serve as a dependency provider for all its descendants.
- Any `component` in the descendant tree, regardless of how deep it is, can inject dependencies.

![props drilling solution](./provide-inject.3e0505e4.png)

**`Provide:`** <br>
To provide data to a component's descendants, use the `provide` option:

`Example:`

```
export default {
  provide: {
    message: 'hello!'
  }
}
```

For each property in the `provide` object, the `key` is used by `child` components to locate the correct value to `inject`, while the value is what ends up being injected.

<br>

If we need to `provide` per-instance `state`, for example data declared via the `data()`, then `provide` must use a function value:

`Example:`

```
export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    // use function syntax so that we can access `this`
    return {
      message: this.message
    }
  }
}
```

<br>

**`Inject:`**
To `inject` data provided by an ancestor component, use the `inject` option:

`Example:`

```
export default {
  inject: ['message'],
  created() {
    console.log(this.message) // injected value
  }
}
```

`Injections` are resolved before the component's own `state.` so you can access injected properties in `data()`.

`Example:`

```
export default {
  inject: ['message'],
  data() {
    return {
      // initial data based on injected value
      fullMessage: this.message
    }
  }
}
```

<br>

**`App-level Provide:`**

In addition to providing data in a component, we can also provide at the app level:

`Example:`

```
import { createApp } from 'vue'

const app = createApp({})

app.provide(/* key */ 'message', /* value */ 'hello!')
```

App-level provides are available to `all` `components` rendered in the app. This is especially useful when writing `plugins`.

<br>

**`Inject:`**<br>
To inject data provided by an ancestor component, use the `inject()` function:

`Example:`

```
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

or

export default{
  inject:["message"],

  created(){
    console.log(this.message)
  }
}

or

import { inject } from 'vue'

export default {
  setup() {
    const message = inject('message')
    return { message }
  }
}
```

<br>

**`Injection Default Values:`**<br>
By `default`, `inject` assumes that the injected `key` is provided somewhere in the `parent` chain. In the case where the `key` is not provided, there will be a runtime `warning`.

`Solution:` Provide default value agains the key.

`Example:`

```
const value = inject('message', 'default value')
```

if no data matching `"message"` was provided.

<br>
<br>

**`Working with reactivity:`** <br>
When using reactive `provide / inject` values, **it is recommended to keep any mutations to reactive state inside of the provider whenever possible**.

There may be times when we need to update the data from an injector component.

`Example:`

Inside provider component:

```
<!-- inside provider component -->
<script setup>
  import { provide, ref } from 'vue'

  const location = ref('North Pole')

  function updateLocation() {
    location.value = 'South Pole'
  }

  provide('location', {
    location,
    updateLocation
  })
</script>
```

Inside injector component:

```
<!-- in injector component -->
<script setup>
  import { inject } from 'vue'

  const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

`Finally`, you can wrap the provided value with `readonly()` if you want to ensure that the data passed through provide cannot be mutated by the injected component.

`Example:`

```
<script setup>
  import { ref, provide, readonly } from 'vue'

  const count = ref(0)
  provide('read-only-count', readonly(count))
</script>
```

Inside option api provide update state change to reflect on injector component

`Example:`

```
export default {
  components: { HomeTitle },
  name: "home-vue",
  data() {
    return {
      count: 0,
    };
  },

  provide() {
    return {
      name: computed(() => this.count),
    };
  }
}
```

use `computed` to wrap data key to `reflect` changes on the `injector` component.
