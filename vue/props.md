# Props

`Vue` components require explicit `props` declaration so that Vue knows what external props passed to the component.

Props are declared using the `props` option:

**`Props declaration:`**

```
<template>
   <h1>{{title}}</h1>
</template>

<script>
  export default {
    props:["title"]
  }
</script>
```

We can also use the `object` with type validation:

`Example:`

```
<template>
   <h1>{{title}}</h1>
</template>

<script>
  export default {
    props:{
      title:String
    }
  }
</script>
```

**`Props name casing:`** <br/>
Declare long props name using `camelCase`.

`Example:`

```
<template>
  <span>{{ greetingMessage }}</span>
</template>

export default {
  props: {
    greetingMessage: String
  }
}
```

In component use

```
<MyComponent greeting-message="hello" />
```

<br/>

**`Static vs. Dynamic props:`**

1. **`Static props:`**<br/>
   `Example:`

   ```
   <BlogPost title="My journey with Vue" />
   ```

2. **`Dynamic props:`**<br/>
   `Example:`

   ```
   <!-- Dynamically assign the value of a variable -->
   <BlogPost :title="post.title" />

   <!-- Dynamically assign the value of a complex expression -->
   <BlogPost :title="post.title + ' by ' + post.author.name" />
   ```

**`Passing different value types:`**

`Numbers:`

```
<!-- Even though `42` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.       -->
<BlogPost :likes="42" />


<!-- Dynamically assign to the value of a variable. -->
<BlogPost :likes="post.likes" />
```

`Boolean:`

```
<!-- Including the prop with no value will imply `true`. -->
<BlogPost is-published />

<!-- Even though `false` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.          -->
<BlogPost :is-published="false" />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost :is-published="post.isPublished" />
```

`Array:`

```
<!-- Even though the array is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.            -->
<BlogPost :comment-ids="[234, 266, 273]" />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost :comment-ids="post.commentIds" />
```

`Object:`

```
<!-- Even though the object is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.             -->
<BlogPost
  :author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
 />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost :author="post.author" />
```

`Numbers:`

```
<!-- Even though `42` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.       -->
<BlogPost :likes="42" />


<!-- Dynamically assign to the value of a variable. -->
<BlogPost :likes="post.likes" />
```
