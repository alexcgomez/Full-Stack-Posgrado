let obj = {};
obj.first = 1;
obj["a b c"] = 123; // Atributo con caracteres especiales

console.log(obj);

let obj2 = {
  ["a b c"]: 2,
  second: false
};
