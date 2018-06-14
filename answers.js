
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