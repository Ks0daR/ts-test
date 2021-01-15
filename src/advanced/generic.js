var cars = ["ford", "audi"];
var cars2 = ["ford", "audi"];
// const promise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 2000);
// });
// promise.then((data) => console.log(data));
var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Promise resolved");
    }, 2000);
});
promise.then(function (data) { return console.log(data); });
function mergeObj(a, b) {
    return Object.assign({}, a, b);
}
var merged = mergeObj({ name: "Sheva" }, { log: "raygan" });
console.log(merged);
