# Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

**`Example:`**

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useState

It is a `hook`, we call it inside a `function` component to add some `local state` to it.
React will `preserve` this state between re-renders.

`useState` returns a pair: the current state value and a function that lets you update it.

**`Example:`**

```
 const [state,setState]=useState(0);
```

- `state:` It is a provide the current state.
- `setState:` It is a updater function. you can call this function from an event handler or something else.

The only argument to useState is the initial state.

### Declaring multiple state variables

You can use the State Hook more than once in a single component:

**`Example:`**

```
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```
