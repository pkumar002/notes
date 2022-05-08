# State

`State` is centeral part of the store. `pinia` the state is defined as a function that return the _initial_ `state`. this work in both `server` and `client` side.

**`Example:`**

```
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
```

## Accessing the state

You can directly read and write to the state by accessing it through the `store` instance:

**`Example:`**

```
const store = useStore()

store.counter++
```

## Reseting the state

You can reset the state to its initial value by calling the `$reset()` method on the store:
**`Example:`**

```
const store = useStore()

store.$reset()
```

## Using with option api.

```
// Example File Path:
// ./src/stores/counterStore.js

import { defineStore } from 'pinia',

const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  })
})
```

If you are not using the Composition API, and you are using `computed`, methods, ..., you can use the `mapState()` helper to map state properties as readonly `computed` properties:

**`Example:`**

```
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    // gives access to this.counter inside the component
    // same as reading from store.counter
    ...mapState(useCounterStore, ['counter'])
    // same as above but registers it as this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'counter',
      // you can also write a function that gets access to the store
      double: store => store.counter * 2,
      // it can have access to `this` but it won't be typed correctly...
      magicValue(store) {
        return store.someGetter + this.counter + this.double
      },
    }),
  },
}
```

### Modifiable state

If you want to be able to write to these state properties (e.g. if you have a form), you can use `mapWritableState()` instead. Note you cannot pass a function like with `mapState()`:

**`Example:`**

```
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    // gives access to this.counter inside the component and allows setting it
    // this.counter++
    // same as reading from store.counter
    ...mapWritableState(useCounterStore, ['counter'])
    // same as above but registers it as this.myOwnName
    ...mapWritableState(useCounterStore, {
      myOwnName: 'counter',
    }),
  },
}
```
