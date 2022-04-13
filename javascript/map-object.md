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

|                           | Map                                                                                         | OBject                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accidental Keys           | A **Map** does not contain any keys by default. it only contain what explicitly put into it | An **object** has a prototype, so it contains default keys that could collide with your own keys.                                                                                                                                                 |
| Key Types                 | A **Map**'s keys can be any value(including func,objects, or any primitive)                 | The keys of an **Object** must be either [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or a [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) |
| Key Order                 | The keys in **Map** are ordered in a simple straightforward way                             | Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex                                                                                                                                   |
| Size                      | The number of items in a **Map** is easily retrieved from its `size` property               | The number of items in an **Object** must be determined manually.                                                                                                                                                                                 |
| Iteration                 | A **Map** is an iterable, so it can be directly iterated                                    | Object does not implement an `iteration protocol`, and so objects are not directly iterable using the JavaScript `for...of` statement                                                                                                             |
| Performance               | Performs better in scenarios involving frequent additions and removals of key-value pairs.  | Not optimized for frequent additions and removals of key-value pairs.                                                                                                                                                                             |
| Serialization and parsing | No native support                                                                           | Native support for serialization from Object to JSON, using `JSON.stringify()`. <br/> Native support for parsing from JSON to Object, using `JSON.parse()`.                                                                                       |

## Map constructor

`Map():` create a new **Map** object

**`Syntax:`**

```
new Map()
new Map(iterable)
```

Parameter
**iterable:** An `Array` or other `iterable` object whose elements are key-value pairs.

**`Example:`**

```
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])
```

## Static Property

**`get Map[@@species]:`**
<br/>
The constructor function that is used to create derived objects.
<br/>
The Map[@@species] accessor property returns the Map constructor.

**`Example:`**<br/>
`Map[Symbol.species]; // function Map()`

**`Derived Object:`**<br/>

```
class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() { return Map; }
}
```

## Instance property

**`Map.prototype.size:`**
Returns the number of key/value pairs in the Map object.

## Instance Methods

1. `Map.prototype.clear():` Removes all key-value pairs from the Map object.
2. `Map.prototype.delete(key):` Return `true` if an element in the **Map** object existed and it has been removed, or `false` if the element does not exist.
3. `Map.prototype.has(key):` Return `true` if key exist in the map.
4. `Map.prototype.get(key):` Retur the value associated to the **key** or **undefined** if there none.
5. `Map.prototype.set(key, value):` Sets the value for the key in the Map object. Returns the Map object.

```

```
