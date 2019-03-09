Object.defineProperty(exports, "__esModule", { value: true });

function map2Json(map) {
  const obj = {};

  for (const key of map.keys()) {
    const child = map.get(key);
    if (child instanceof Map) {
      obj[key] = map2Json(child);
    } else {
      obj[key] = child;
    }
  }

  return obj;
}
exports.map2Json = map2Json;

function json2Map(obj) {
  const map = new Map();

  for (const key of Object.keys(obj)) {
    const child = obj[key];

    if (child != null) {
      if (typeof child === "object") {
        map.set(key, json2Map(child));
      } else {
        map.set(key, child);
      }
    }
  }

  return map;
}

exports.json2Map = json2Map;
