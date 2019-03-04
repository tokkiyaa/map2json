import { map2Json, json2Map } from "./index";

describe("map2Json", () => {
  it("should convert Map to JSON object", () => {
    const map = new Map();
    map.set("a", 1);
    map.set("b", 2);

    const expectedJsonObject = { a: 1, b: 2 };
    expect(map2Json(map)).toEqual(expectedJsonObject);
  });

  it("can convert nested Map to nested JSON object", () => {
    const map1 = new Map();
    const map2 = new Map();

    map1.set("a", map2);
    map2.set("b", 1);

    const expectedJsonObject = { a: { b: 1 } };
    expect(map2Json(map1)).toEqual(expectedJsonObject);
  });
});

describe("json2Map", () => {
  it("should convert JSON to map object", () => {
    const jsonObject = { a: 1, b: 2 };

    const expectedMap = new Map();
    expectedMap.set("a", 1);
    expectedMap.set("b", 2);

    expect(json2Map(jsonObject)).toEqual(expectedMap);
  });

  it("can convert nested JSON Object to nested Map", () => {
    const jsonObject = { a: { b: 1 } };

    const expectedMap1 = new Map();
    const expectedMap2 = new Map();

    expectedMap1.set("a", expectedMap2);
    expectedMap2.set("b", 1);

    expect(json2Map(jsonObject)).toEqual(expectedMap1);
  });
});
