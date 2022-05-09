# [Space complexity](#space-complexity)

We can also use big `O` notation to analyze `space complexity:` how much additional memory do we need to allocate in order to run the code in our algorithms?

**`Rule of thumbs`**

- Most primitives (booleans, numbers, undefined, null) are constant space.
- String require `O(n)` space (where n is the string length).
- Reference types are generally `O(n)`, where n is the length (for `arrays`) or the number of keys (for `Object`).
