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

## Iteration methods

1. `Map.prototype[@@iterator]():`<br/>
   The initial value of the @@iterator property is the same function object as the initial value of the entries method.
   <br/>
   **`Example:`**

   ```
   const map1 = new Map();

   map1.set('0', 'foo');
   map1.set(1, 'bar');

   const iterator1 = map1[Symbol.iterator]();

   for (const item of iterator1) {
     console.log(item);
   }
   // expected output: Array ["0", "foo"]
   // expected output: Array [1, "bar"]
   ```

2. `Map.prototype.keys():`
   <br/>
   The keys() method returns a new iterator object that contains the keys for each element in the Map object in insertion order.

   ```
   const map1 = new Map();

   map1.set('0', 'foo');
   map1.set(1, 'bar');

   const iterator1 = map1.keys();

   console.log(iterator1.next().value);
   // expected output: "0"

   console.log(iterator1.next().value);
   // expected output: 1
   ```

   **`Output:`**

   ```
   > "0"
   > 1
   ```

3. `Map.prototype.values():`<br/>
   Returns a new Iterator object that contains the values for each element in the Map object in insertion order

   ```
     const map1 = new Map();

     map1.set('0', 'foo');
     map1.set(1, 'bar');

     const iterator1 = map1.values();

     console.log(iterator1.next().value);
     // expected output: "0"

     console.log(iterator1.next().value);
     // expected output: 1
   ```

   **`Output:`**

   ```
   > "foo"
   > "bar"
   ```

4. `Map.prototype.entries():`<br/>
   Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.

   ```
   const map1 = new Map();

   map1.set('0', 'foo');
   map1.set(1, 'bar');

   const iterator1 = map1.entries();

   console.log(iterator1.next().value);
   // expected output: ["0", "foo"]

   console.log(iterator1.next().value);
   // expected output: [1, "bar"]
   ```

   **`Output:`**

   ```
   > Array ["0", "foo"]
   > Array [1, "bar"]
   ```

5. `Map.prototype.forEach():`<br/>
   The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.

   ```
   function logMapElements(value, key, map) {
     console.log(`m[${key}] = ${value}`);
   }

   new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
     .forEach(logMapElements);

   // expected output: "m[foo] = 3"
   // expected output: "m[bar] = [object Object]"
   // expected output: "m[baz] = undefined"

   ```

   **`Output:`**

   ```
   > "m[foo] = 3"
   > "m[bar] = [object Object]"
   > "m[baz] = undefined"
   ```

**`Examples:`**

```
const myMap = new Map()

const keyString = 'a string'
const keyObj    = {}
const keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
myMap.get(keyObj)       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"

myMap.get('a string')    // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({})            // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}

```

## Using NaN as Map keys

NaN can also be used as a key. Even though every NaN is not equal to itself (NaN !== NaN is true)

**`Examples:`**

```
const myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

const otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
```

## Relation with Array objects

```
const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
```

Map can be merged, maintain key uniqueness:

```
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
const merged = new Map([...first, ...second])

console.log(merged.get(1)) // uno
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

```

Maps can be merged with Arrays, too:

```
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, 'eins']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

```
