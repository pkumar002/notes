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

### **`Modifiable state`**

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

### **`Mutating the state`**

Apart from directly mutating the store with `store.counter++`, you can also call the `$patch` method. It allows you to apply multiple changes at the same time with a partial state object:

**`Example:`**

```
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})
```

`However,` some mutations are really `hard` or **`costly`** to apply with this syntax: any collection modification (e.g. `pushing`, `removing`, `splicing` an element from an `array`) requires you to create a new collection. Because of this, the `$patch` method also accepts a function to group this kind of mutations that are difficult to apply with a patch object:

**`Example:`**

```
cartStore.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

The main difference here is that `$patch()` allows you to group multiple changes into one single entry in the devtools.

### **`Replacing the state`**

You can replace the whole state of a store by setting its $state property to a new object:

**`Example:`**

```
store.$state = { counter: 666, name: 'Paimon' }
```

### **`Subscribing to the state`**

You can watch the state and its changes through the `$subscribe()` method of a store

**`Example:`**

```
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // same as cartStore.$id
  mutation.storeId // 'cart'
  // only available with mutation.type === 'patch object'
  mutation.payload // patch object passed to cartStore.$patch()

  // persist the whole state to the local storage whenever it changes
  localStorage.setItem('cart', JSON.stringify(state))
})
```

By default, state subscriptions are bound to the `component` where they are added (if the store is inside a component's `setup()`). Meaning, they will be automatically removed when the component is unmounted. If you want to keep them after the component is unmounted, pass `{ detached: true }` as the second argument to detach the state subscription from the current component:

**`Example:`**

```
export default {
  setup() {
    const someStore = useSomeStore()

    // this subscription will be kept after the component is unmounted
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
```

You can watch the whole state on the pinia instance:

```
watch(
  pinia.state,
  (state) => {
    // persist the whole state to the local storage whenever it changes
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)

```
