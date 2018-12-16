// Map to Object 
// wawjs - convert Map to Object hash 

// myMap.toJSON = 
function map2obj(map) {
  map || (map = this);
  const r = {};
  for (const [k, v] of map) {
    if (typeof k != "string")
      throw new Error("non string key in map");
    r[k] = v;
  }
  return r;
}