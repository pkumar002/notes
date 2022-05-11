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
