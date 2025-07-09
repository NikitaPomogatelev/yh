// Реализуйте функцию для глубокого клонирования объектов:

function deepCopy(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newArr = [];

    seen.set(obj, newArr);

    obj.forEach((item, idx) => {
      newArr[idx] = deepCopy(item, seen);
    });

    return newArr;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const copy = {};
  seen.set(obj, copy);

  for (const key of Object.keys(obj)) {
    copy[key] = deepCopy(obj[key], seen);
  }

  const symbols = Object.getOwnPropertySymbols(obj);
  for (const sym of symbols) {
    copy[sym] = deepCopy(obj[sym], seen);
  }

  return copy;
}

const secretKey = Symbol("secret");

const original = {
  name: "Никита",
  age: 27,
  createdAt: new Date(),
  skills: ["JS", "Vue", "React"],
  address: {
    country: "Россия",
    zip: 12345,
  },
  [secretKey]: "hidden",
};

const clone = deepCopy(original);

console.log(clone);


console.log(clone === original); // false
console.log(clone.address === original.address); // false
console.log(clone.skills === original.skills); // false
console.log(clone.createdAt === original.createdAt); // false


console.log(clone[secretKey]); // 'hidden'
console.log(clone[secretKey] === original[secretKey]); // true

