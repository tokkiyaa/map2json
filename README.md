# map2json

JSON Object <=> ES6 Map Converter

## Installation

```bash
npm install @tokkiyaa/map2json
```

## Usage

### ES6 Map => JSON Object

```javascript
import { map2Json } from "@tokkiyaa/map2json";

const map = new Map([["a", 1], ["b", 2]]);
map2Json(map);
// {"a":1,"b":2}
```

### JSON Object => ES6 Map

```javascript
import { json2Map } from "@tokkiyaa/map2json";
const jsonObject = { a: 1, b: 2 };
json2Map(jsonObject);
// Map(2) {"a" => 1, "b" => 2}
```
