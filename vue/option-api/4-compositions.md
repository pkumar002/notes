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
