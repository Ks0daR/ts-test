const cars: string[] = ["ford", "audi"];
const cars2: Array<string> = ["ford", "audi"];

// const promise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 2000);
// });

// promise.then((data) => console.log(data));

const promise: Promise<string> = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

promise.then((data) => console.log(data));

function mergeObj<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
}

const merged = mergeObj({ name: "Sheva" }, { log: "raygan" });
const merged2 = mergeObj({ car: "mustang" }, { type: 42 });
// const merged3 = mergeObj("aaa" ,  "bbb" );

// console.log(merged2);

// =====================
interface iLength {
  length: number;
}

function withCount<T extends iLength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `Тут ${value.length} букофф`,
  };
}

// console.log(withCount("hello typeScript"));
// console.log(withCount(["hello", "typeScript"]));
// console.log(withCount({ length: 20 }));
// console.log(withCount(20));

// ==================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const car = {
  model: "tesla",
  wheels: 6,
  type: "diesel",
};

// console.log(getObjectValue(car, "model"));
// console.log(getObjectValue(car, "wheels"));
// console.log(getObjectValue(car, "type"));

// ====================================

class Collection<T extends number | string | boolean> {
  //   private _items: T[] = [];
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter((elem) => elem !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

// const strings = new Collection(["i", "am", "strings"]);
// strings.add("!");
// strings.remove("i");
// console.log(strings.items);

// const numbers = new Collection(["1", "5", "9"]);
// numbers.add("11");
// numbers.remove("5");
// console.log(numbers.items);

// const objs = new Collection([{ a: "1" }, { b: "5" }]);
// objs.add({ c: "11" });
// objs.remove({ b: "5" });
// console.log(objs.items);
