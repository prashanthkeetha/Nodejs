 /*let number=150;
console.log(`Enter an integer:${number}`);

// // Take range input from the user

let range=20;
console.log(`Enter a range:${range}`);

// Creating a multiplication table
for (let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}*/
// Get user input for number
// const numberInput = window.prompt("Enter an integer:");
// const number = Number(numberInput);

// // Check if the input is a valid number
// if (isNaN(number)) {
//     console.log("Invalid input. Please enter a valid integer.");
// } else {
//     // Get user input for range
//     const rangeInput = window.prompt("Enter a range:");
//     const range = Number(rangeInput);

//     // Check if the input is a valid number
//     if (isNaN(range)) {
//         console.log("Invalid input. Please enter a valid range.");
//     } else {
//         // Creating a multiplication table
//         for (let i = 1; i <= range; i++) {
//             const result = i * number;
//             console.log(`${number} * ${i} = ${result}`);
//         }
//     }
// }
//STATICMODEL
const readline = require('readline');
const work = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function valuesToNumber(input) {
  const num = Number(input);
  if (!isNaN(num)) {
    return num;
  } else {
    return null;
  }
}

function multiplyNumbers() {
  work.question('Enter a number: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      work.close();
      return;
    }

    const number = valuesToNumber(input);

    if (number !== null) {
      const outputValue = 10; // Change this to your desired number of iterations
      for (let i = 1; i <= outputValue; i++) {
        const result = number * i;
        console.log(`${number} * ${i} = ${result}`);
      }
    } else {
      console.log('Invalid input. Please enter a valid number.');
    }
    
    // Continue the loop
    multiplyNumbers();
  });
}

// Start the multiplication process
multiplyNumbers();
