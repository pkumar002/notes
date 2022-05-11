# Teleport

`<Teleport>` is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

Renders its slot content to another part of the DOM.

**`Props:`**

- to: string or HTMLElement
- disabled: boolean

`Example:`

```
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-teleport]" />
```

Conditionally disabling:

```
<teleport to="#popup" :disabled="displayVideoInline">
  <video src="./my-movie.mp4">
</teleport>
```
