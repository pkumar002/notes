# Compositions

**`1. provide:`**<br>
Provide values that can be injected by `descendent` `components`.

`Details:`<br>
The `provide` option should be either an `object` or a `function` that returns an `object`. This `object` contains the `properties` that are available for `injection` into its descendants. You can use `Symbols` as keys in this object.

`Example`:

```
const s = Symbol()

export default {
  provide: {
    foo: 'foo',
    [s]: 'bar'
  }
}
```

Using a function to provide per-component state:

`Example`:

```
export default {
  data() {
    return {
      msg: 'foo'
    }
  }
  provide() {
    return {
      msg: this.msg
    }
  }
}
```

<br>

**`2. inject:`**<br>
Declare properties to inject into the current component by locating them from ancestor providers.

`Details:`<br>
The inject option should be either:

- An array of strings
- An `injected` property will be `undefined` if neither a matching property nor a default value was provided.
- Note that `injected` bindings are NOT `reactive`.

<br>

`Example 1:`<br>
Basic uses

```
export default {
  inject: ['foo'],
  created() {
    console.log(this.foo)
  }
}
```

`Example 2:`<br>
Using an injected value as the default for a prop:

```
const Child = {
  inject: ['foo'],
  props: {
    bar: {
      default() {
        return this.foo
      }
    }
  }
}
```

`Example 3:`<br>
Using an injected value as data entry:

```
const Child = {
  inject: ['foo'],
  data() {
    return {
      bar: this.foo
    }
  }
}
```

`Example 4:` <br>
Injections can be optional with default value:

```
const Child = {
  inject: {
    foo: { default: 'foo' }
  }
}
```

`Example 5:` <br>
If it needs to be injected from a property with a different name, use from to denote the source property:

```
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: 'foo'
    }
  }
}
```

`Example 6:` <br>
Similar to prop defaults, you need to use a factory function for non-primitive values:

```
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```

<br>

**`3. mixins:`**<br>
An array of option objects to be mixed into the current component.

`Details:`<br>

- The mixins option accepts an array of mixin objects.
- These mixin objects can contain instance options like normal instance objects.
- they will be merged against the eventual options using the certain option merging logic.
- if your mixin contains a created hook and the component itself also has one, both functions will be called.

`Mixin` hooks are called in the order they are provided, and called before the component's own hooks.

`Example:`

```
const mixin = {
  created() {
    console.log(1)
  }
}

createApp({
  created() {
    console.log(2)
  },
  mixins: [mixin]
})

// => 1
// => 2
```
