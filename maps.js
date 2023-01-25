Maps in java script
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// second method 
 const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200)


// for each()
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

 //entry() method returns iterator object with the [key, values] in a Map:
let text = "";
for (const x of fruits.entries()) {
  text 
