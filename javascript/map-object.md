# Map

The Map object hold `key-value` pairs and remembers the original insertion orders of the keys. any value (both **Objects** and **primitive values**) may be used either a `key` or `value`.

**`Syntax:`**

```
 const map = new Map();

 map.set('a',1)
 map.set('b',2)
 map.set('name','pradeep')

 console.log(map)
```

**`Output:`**

```
Map(3) {'a' => 1, 'b' => 2, 'name' => 'pradeep'}
```

A `Map` objects iterates its elment in insertion order - a `for...of` loop returns an array of `[key,value]`

```
for (let [key, value] of map) {
  console.log(key + ' - ' + value)
}
```

**`Output:`**

```
a - 1
b - 2
name - pradeep
```

## Objects vs maps

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) is similar to **Map** -- both let you set keys to values, retrive those values, delete keys, and detect wheather something is stored at a key. **Object** has been used as **Map** historically.

However, there are important differences

|                 | Map                                                                                         | OBject                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accidental Keys | A **Map** does not contain any keys by default. it only contain what explicitly put into it | An **object** has a prototype, so it contains default keys that could collide with your own keys.                                                                                                                                                 |
| Key Types       | A **Map**'s keys can be any value(including func,objects, or any primitive)                 | The keys of an **Object** must be either [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) |
| Key Order | The keys in **Map**

## Instance property

**`Map.prototype.size:`**
Returns the number of key/value pairs in the Map object.

## Instance Methods

1. `Map.prototype.clear():` Removes all key-value pairs from the Map object.
2. `Map.prototype.delete(key):` Return `true` if an element in the **Map** object existed and it has been removed, or `false` if the element does not exist.
3. `Map.prototype.has(key):` Return `true` if key exist in the map.
4. `Map.prototype.get(key):` Retur the value associated to the **key** or **undefined** if there none.
5. `Map.prototype.set(key, value):` Sets the value for the key in the Map object. Returns the Map object.
