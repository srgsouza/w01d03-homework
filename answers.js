
// Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i < 20; i++) {
  console.log(i+1);
}


// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
let min = 1
let max = 3
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    if (randomNum == 1) {
      console.log("...human...why you taking pictures of me?...");
    } else if (randomNum === 2) {
      console.log("...the catnip made me do it...");
    } else {
      console.log("...why does the red dot always get away...");  
    }
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min
}

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]
// Matt H.decides that Thom.can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
// Karolin just had her birthday; change Karolin's array to reflect her being a year older.
// Change Matt H's hometown from Philadelphia to "Gotham City".
// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".

thom.shift();
thom.unshift('Gameboy');
console.log(thom);
karolin[1] = 17;
console.log(karolin);
matt[2] = 'Gotham City';
console.log(matt);
kristyn.pop();
kristyn.push('Brooklyn');
console.log(kristyn);

// Create an array with the members of the ninja turtles(Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for loop to call toUpperCase() on each of them and print out the result.
const ninjas = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i = 0; i < ninjas.length; i++) {
  console.log(ninjas[i].toUpperCase());
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ], [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ], [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
console.log(kristynsCloset);
console.log(thomsCloset);

// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom.Put the output in a sentence to tell us what we'll be wearing. Mix and match!
// Dirty Laundry
// Continue looking at the closet arrays:
// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
kristynsCloset.forEach(element => {
  console.log(`WHIRR: Now washing ${element}.`);
});

// Inventory
// Thom wants to do inventory on his closet.Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
for (let i = 0; i < thomsCloset.length; i++) {
  // item = thomsCloset[i]
  for (let j = 0; j < thomsCloset[i].length; j++) {
    console.log(thomsCloset[i][j]);
  }
}






