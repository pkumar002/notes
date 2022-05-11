# Option api

**`Options: state`**<br>

- data
- props
- computed
- methods
- watch
- emits
- expose

<br/>

**`data:`**<br>
A function that return inital reactive state for the component instance. After the instance is create, the original data object can be accessed as `this.$data`.

The `component` instance also `proxies` all the properties found on the data object.

so `this.a` will be equivalent to `this.$data.a`.

`Note:`<br>
Properties that start with `_` or `$` will not be proxied on the component instance because they may conflict with Vue's internal properties and API methods.

`Example:` <br>

```
export default {
  data() {
    return { a: 1 }
  },
  created() {
    console.log(this.a) // 1
    console.log(this.$data) // { a: 1 }
  }
}
```

**`props:`**<br>
Declare the props of a component.

`Props Options`

- type
- required
- default
- validator

Component `props` can be declared in two forms.

1. Simple form using an array.
   `Example:`<br>
   ```
   export default {
       props:["title","user"]
   }
   ```
2. Full form using an object
   `Example:`<br>
   ```
   export default {
       props:{
           title:{
               type:String,
               default:'Hello world',
               required:true,
               validator:(value)=>{
                   return value!==''
               }
           },
           user:{
               type:Object,
               default:{},
               required:true
           }
       }
   }
   ```

**`computed:`**<br>
Declare computed properties to be exposed on the `component` instance. it accespts an `object` where key is the name of `computed` properties. `value` is eighter a computed getter or an object with `get` and `set` methods.

All `getters` and `setters` have their `this` context automatically bound to the component instance.

`Example:`

```
export default {
  data() {
    return { a: 1 }
  },
  computed: {
    // readonly
    aDouble() {
      return this.a * 2
    },
    // writable
    aPlus: {
      get() {
        return this.a + 1
      },
      set(v) {
        this.a = v - 1
      }
    }
  },
  created() {
    console.log(this.aDouble) // => 2
    console.log(this.aPlus) // => 2

    this.aPlus = 3
    console.log(this.a) // => 2
    console.log(this.aDouble) // => 4
  }
}
```

**`methods:`**
Declare methods to be mixed with computer instance. you can dirctly access them on the `component` instance or used in `template` expressions. all methods have their `this` context.

`Note:`<br>
Don't use `arrow function` into method, they will not have access to the component instance via `this`.

`Example:`

```
export default {
  data() {
    return { a: 1 }
  },
  methods: {
    plus() {
      this.a++
    }
  },
  created() {
    this.plus()
    console.log(this.a) // => 2
  }
}
```

**`watch:`**<br>
Declare `watch` callbacks to be invoked on data change.

It excepts an object where `key` are the `reactive` component instane properties to `watch`, declared via `data` and `computed` -- and `values` are the corresponding `callbacks`,

The `callbacks` receives the `new` and `old` value.

`Example:`

```
export default {
  data() {
    return {
      a: 1,
      b: 2,
      c: {
        d: 4
      },
      e: 5,
      f: 6
    }
  },
  watch: {
    // watching top-level property
    a(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    },
    // string method name
    b: 'someMethod',
    // the callback will be called whenever any of the watched object properties change regardless of their nested depth
    c: {
      handler(val, oldVal) {
        console.log('c changed')
      },
      deep: true
    },
    // watching a single nested property:
    'c.d': function (val, oldVal) {
      // do something
    },
    // the callback will be called immediately after the start of the observation
    e: {
      handler(val, oldVal) {
        console.log('e changed')
      },
      immediate: true
    },
    // you can pass array of callbacks, they will be called one-by-one
    f: [
      'handle1',
      function handle2(val, oldVal) {
        console.log('handle2 triggered')
      },
      {
        handler: function handle3(val, oldVal) {
          console.log('handle3 triggered')
        }
        /* ... */
      }
    ]
  },
  methods: {
    someMethod() {
      console.log('b changed')
    },
    handle1() {
      console.log('handle 1 triggered')
    }
  },
  created() {
    this.a = 3 // => new: 3, old: 1
  }
}
```
