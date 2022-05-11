# Lifecycle methods

**`1. beforeCreate: `** <br>
Call immediately when the `instance` is initialized, after `props` resolution.
before processing other options such as `data` and `computed`.

`Note:`<br>

- `setup()` called before any option api hook, even `beforeCreate`.
- You have no access of this.
- You can access `setup()` hook return values.
- Update `setup()` hook `ref` and `reactive`.

`Example:`

```
export default {
    props:["title"],
    setup(){
        const count = ref(0);

        return {
            count
        }
    }
    beforeCreate(){
        // the component instance is not fully initialized yet.
        console.log(this.props) // undefined

        // only access setup() hook
        console.log(this.count)
    }
}
```
