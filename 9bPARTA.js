// Create a new Set
var mySet = new Set();

// Add values to the Set
mySet.add(10);
mySet.add("Hello");
mySet.add(true);
mySet.add(10); // Adding duplicate value, which will be ignored

// Retrieve value from the Set
var value = "Hello";
if (mySet.has(value)) {
  console.log(value + " is present in the Set.");
} else {
  console.log(value + " is not present in the Set.");
}

// Iterate over the Set
console.log("Values in the Set:");
mySet.forEach(function(item) {
  console.log(item);
});
