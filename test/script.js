 require('maliklar-test-package');

const test = "Hello There";

test.reverse();
console.log(test);

test.wrap("h1");
console.log(test);

test.padEnd("1");

console.log(test);

const a = [1,2,3,4,5,6];

a.delete();
console.log(a);