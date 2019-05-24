class MultiplicatorUnitFailure extends Error { }

let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);

console.log(reliableMultiply(x, y));
// → 64

// console.log(primitiveMultiply(x, y));

function primitiveMultiply(a, b) {
     if (Math.random() < 0.2) {
          return a * b;
     } else {
          throw new MultiplicatorUnitFailure("Klunk");
     }
}

function reliableMultiply(a, b) {
     // Your code here.
     if (1 == 1) {
          try {
               console.log("I got " + a * b + " when ");
               // primitiveMultiply();
               console.log("I tried " + a + " * " + b);
          } catch (err) {
               console.log("primitiveMultiply(a, b) did not work");
          }
     }
}
