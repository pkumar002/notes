## [Defining a store](#defining-a-store)

```
import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  // other options...
})
```

## [Using the store](#using-the-store)

```
import { useStore } from '@/stores/counter'

export default {
  setup() {
    const store = useStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
```

You can define as many `stores` as you want and **you should define each store in different file**.

<br/>

**`Note:`** If you are not using `setup` components yet, you can still use `pinia` with _map helpers_.

Once the **`store`** is instantiated, you can access any property defined in `state`, `getters`, and `actions` directly on the `store`.

**`Note:`** that store is an object wrapped with _reactive_, meaning there is no need to write .value after `getters` but, like props in `setup`, we cannot _destructure_ it:

```
export default defineComponent({
  setup() {
    const store = useStore()
    // ❌ This won't work because it breaks reactivity
    // it's the same as destructuring from `props`
    const { name, doubleCount } = store

    name // "eduardo"
    doubleCount // 2

    return {
      // will always be "eduardo"
      name,
      // will always be 2
      doubleCount,
      // this one will be reactive
      doubleValue: computed(() => store.doubleCount),
      }
  },
})
```

In order to extract properties from the store while keeping its _`reactivity`_, you need to use **`storeToRefs()`**.

**`storeToRefs():`**

- It will create refs for every property.
- This is usefull when you are only using `state` not calling `actions`.
- You can _`destructure`_ `actions` directly from the stores.
  <br/>
  **`Example:`**

  ```
  import { storeToRefs } from 'pinia'

  export default defineComponent({
    setup() {
      const store = useStore()
      // `name` and `doubleCount` are reactive refs
      // This will also create refs for properties added by plugins
      // but skip any action or non reactive (non ref/reactive) property
      const { name, doubleCount } = storeToRefs(store)
      // the increment action can be just extracted
      const { increment } = store

      return {
        name,
        doubleCount
        increment,
      }
    },
  })
  ```
