# Component Instance

**`$data:`**<br>
This object return from the data option, made reactive by the component.

`Example:`

```
export default{
  data(){
    return{
      name:'pradeep',
      age:20,
      email:'pk@gmail.com'
    }
  }
}

<template>
  <div>{{this.$data}}</div>
</template>
```
