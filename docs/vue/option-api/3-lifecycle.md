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

**`2. created:`** <br>
Called after the `instance` has finished processing all state-related options. When this hooks is called, the following have been set up: `reactive data`, `computed` properties, `methods`, and `watchers`.

`Note:`

- You can not access `$el` property due to mount phase has not been started yet.

<br>

**`3. beforeMount:`**<br>
Called right before the component is to be `mounted`.

`Note:`

- You can not access `$el` property due to mount phase has not been started yet.
- This hook is not called during `server-side` rendering.

<br>

**`4. mounted:`**<br>
Called after the component has been `mounted`.

This hook is typically used for performing side effects that need to access to the components rendered DOM,

`Note:`

- All of its synchronous child components have been mounted (does not include async components or components inside <Suspense> trees).
- This hook is not called during `server-side` rendering.

<br>

**`5. beforeUpdate:`**<br>
Called right before the component is about to update its `DOM` tree, dute to a `reactive` state change.

This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.

`Note:`

- This hook is not called during `server-side` rendering.

<br>

**`6. updated:`**<br>
Called after the component has updated its `DOM` tree due to a `reactive` state change.

`Details:`

- A parent component's updated hook is called after that of its child components.
- If you need to access the updated `DOM` after a specific state change, use `nextTick()` insted.

`Note:`

- This hook is not called during `server-side` rendering.

`Warning:`<br>
Do not mutate component `state` in the updated hook - this will likely lead to an `infinite` update `loop`!

<br>

**`7. beforeUnmount:`**<br>
Called right before a component instance is to be unmounted.

`Details:`<br>
When this hook is called, the component instance is still fully functional.

`Note:`

- This hook is not called during `server-side` rendering.

  <br>

**`8. unmount:`**<br>
Called after the component has been unmounted.

`Details:`<br>

- All of its `child` `components` have been unmounted.
- All of its associated `reactive effects` (render effect and `computed` / `watchers` created during `setup()`) have been stopped.

`Note:`

- Use this hook to clean up manually created side effects such as `timers`, `DOM` event listeners or `server` connections.
- This hook is not called during `server-side` rendering.

<br>

**`9. errorCaptured:`**<br>
Called when an error propagating from a descendent component has been captured.

`Details:`<br>
Errors can be captured from the following sources:

- Component renders
- Event handlers
- Lifecycle hooks
- setup() function
- Watchers
- Custom directive hooks
- Transition hooks

The hook receives three arguments: the `error`, the `component instance` that triggered the error, and an information string specifying the error source type.

You can modify component state in `errorCaptured()` to display an error state to the user.

`Example:`<br>

```
 errorCaptured(error, ins, info) {
    console.log("error", error);
    console.log("instance", ins);
    console.log("info", info);
}
```

<br>

**`10. renderTracked:`**<br>
Called when a `reactive` dependency has been tracked by the component's render effect.

`Note:`<br>

- Dev only support

<br>

**`10. renderTriggered:`**<br>
Called when a `reactive` dependency has been triggers by the component's render effect to be re-run.

`Note:`<br>

- Dev only support

<br>

**`10. activated:`**<br>
Called after the component instance is inserted into the DOM as part of a tree cached by `<KeepAlive>`

`Note:`<br>

- This hook is not called during server-side rendering.

<br>

**`10. deactivated:`**<br>
Called after the component instance is removed from the DOM as part of a tree cached by <KeepAlive>.

`Note:`<br>

- This hook is not called during server-side rendering.

<br>

**`10. serverPrefetch:`**<br>
Async function to be resolved before the component instance is to be rendered on the server.

`Details:`<br>

- If the hook returns a Promise, the server renderer will wait until the Promise is resolved before rendering the component.

- This hook is only called during server-side rendering can be used to perform server-only data fetching.

`Note:`<br>

- This hook is not called during server-side rendering.

`Example:`

```
export default {
  data() {
    return {
      data: null
    }
  },
  async serverPrefetch() {
    // component is rendered as part of the initial request
    // pre-fetch data on server as it is faster than on the client
    this.data = await fetchOnServer(/* ... */)
  },
  async mounted() {
    if (!this.data) {
      // if data is null on mount, it means the component
      // is dynamically rendered on the client. Perform a
      // client-side fetch instead.
      this.data = await fetchOnClient(/* ... */)
    }
  }
}
```
