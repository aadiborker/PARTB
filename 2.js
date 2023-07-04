console.time('Set Performance');
const set = new Set();
for (let i = 0; i < 100000; i++) {
  set.add(i);
}
for (let i = 0; i < 100000; i++) {
  set.has(i);
}
console.timeEnd('Set Performance');
// Array performance test
console.time('Array Performance');
const array = [];
for (let i = 0; i < 100000; i++) {
 if (!array.includes(i)) {
    array.push(i);
  }
}
for (let i = 0; i < 100000; i++) {
  array.includes(i);
}
console.timeEnd('Array Performance');
