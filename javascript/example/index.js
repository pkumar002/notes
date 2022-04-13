const map = new Map();

map.set('a', 1)
map.set('b', 2)
map.set('name', 'pradeep')
console.log(map)

for (let [key, value] of map) {
  console.log(key + ' - ' + value)
}