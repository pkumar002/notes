# [Store](#store)

A Store is an entity holding state and business logic that isn't bound to the component tree. It host global state.

It has three concepts.

1. Data
2. Computed
3. Methods

**`When should you use a Store`**
A store shold contain data that can be accessd throughout your application.

<br/>

# [Pinia](#pinia)

Pinia is store library for `vue`. it allows you to share a state across `components/pages`.

### `Installation`

```
yarn add pinia
# or with npm
npm install pinia
```

### `Inject pinia to the application instance`

```
import {createApp} from 'vue'
import {createPinia} from 'pinia'

// app instance
const app = createApp(<App/>)

// inject and mount
app
.use(createPinia())
.mount("#app")
```

### [Why](#why)

- Devtools support

  - A timeline to track actions, mutations.
  - Store appear in components where they are used.
  - Time travel and easier debugging.

- Hot module replacement

  - Modify your sotres without reloading your page.
  - Keep any existing state while developing.

- Plugin: extend `Pinia` features with `plugins`.
- Typescript support.
- SSR support.

<br/>

### Defining a Store and using:

**`Examples:`**

```
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

And you use it in a `component`

```
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
  },
}
```

You can even use a function (similar to a component `setup()`) to define a `Store`.

```
import { useCounterStore } from '@/stores/counter'

export default authStore = defineStore("auth",{
  const auth = reactive({
    isAuth:false,
    user:null,
    token:null,
    redirectUrl:'/'
  })

  function login(){

  }

  function signup(){

  }

  function logout(){

  }

  return {
    auth,
    login,
    signup,
    logout
  }
})
```

If you are still not into `setup()` and `Composition Api`, don't worry, `Pinia` also support a similar set of `map` helpers like `Vuex`. You define stores the same way but then use `mapStores()` , `mapState()`, or `mapActions()`.

```
onst useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

const useUserStore = defineStore('user', {
  // ...
})


export default {
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}
```
