# Options: Misc

- name
- inheritAttrs
- components
- directives

**`1. name:`**<br>
Explicitly declare a display name for the component.

<br>

**`2. inheritAttrs:`** <br>

`Details:`

`Example: 1` <br>
When declaring this option in a component that uses `<script setup>`. a separate `<script> block is` necessary:

```
<script>
  export default {
    inheritAttrs: false
  }
</script>

<script setup>
  defineProps(['label', 'value'])
  defineEmits(['input'])
</script>

<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </label>
</template>
```

`Example 2:`<br>
Using with `Option API`.

```
export default{
  inheritAttrs:false
}

<template>
<div>
 <input v-bind="$attrs">
</div>
</template>
```

<br>

**`3. components:`**<br>
Registered component locally to be made available to the component instance.

`Example:`

```
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: {
    // shorthand
    Foo,
    // register under a different name
    RenamedBar: Bar
  }
}
```

<br>

**`4. directives:`**<br>
An object that registers directives to be made available to the component instance.

`Example:`

```
export default {
  directives: {
    // enables v-focus in template
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}

<template>
  <input v-focus>
</template>
```
