/*STATIC MODEL*/
// let number;
// let userInput;

// do {
//     userInput = prompt('Enter the number:');
//     number = parseFloat(userInput);
//     if (isNaN(number)) {
//         console.log('Invalid input. Please enter a valid number.');
//     }
// } while (isNaN(number));

// let range = parseInt(prompt('Enter the range: 7'));

// // Check if the range input is a valid number
// if (!isNaN(range)) {
//     console.log(`Multiplication table for ${number} within the range 1 to ${range}:`);
    
//     for (let i = 1; i <= range; i++) {
//         let result = number * i;
//         console.log(`${number} * ${i} = ${result}`);
//     }
// } else {
//     // Handle invalid range input
//     console.log('Invalid input for range. Please enter a valid number.');
// }
// Take number input from the user
// const number = parseInt(prompt('Enter an integer: '));*/
// const readline = require('readline');
// const work = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function valuesToNumber(input) {
//   const num = Number(input);
//   if (!isNaN(num)) {
//     return num;
//   } else {
//     return null;
//   }
// }

// let range = 100;

// work.question(`Enter a number between 1 and ${range}: `, (input1) => {
//   const number1 = valuesToNumber(input1);
//   if (number1 !== null && number1 >= 1 && number1 <= range) {
//     work.question(`Enter a second number between 1 and ${range}: `, (input2) => {
//       const number2 = valuesToNumber(input2);
//       if (number2 !== null && number2 >= 1 && number2 <= range) {
//         const result = number1 * number2;
//         console.log(`Multiplication result: ${number1} * ${number2} = ${result}`);
//       } else {
//         console.log(`Invalid second input. Please enter a valid number between 1 and ${range}.`);
//       }
//       work.close();
//     });
//   } else {
//     console.log(`Invalid first input. Please enter a valid number between 1 and ${range}.`);
//     work.close();
//   }
// });
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

let range = 15;

function multiplyNumbers() {
  work.question(`Enter a number between 1 and ${range}: `, (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      work.close();
      return;
    }

    const number = valuesToNumber(input);

    if (number !== null && number >= 1 && number <= range) {
      work.question(`Enter a second number between 1 and ${range}: `, (input2) => {
        const number2 = valuesToNumber(input2);
        if (number2 !== null && number2 >= 1 && number2 <= range) {
          const result = number * number2;
          console.log(`Multiplication result: ${number} * ${number2} = ${result}`);
          multiplyNumbers(); // Ask for input again
        } else {
          console.log(`Invalid second input. Please enter a valid number between 1 and ${range}.`);
          multiplyNumbers(); // Ask for input again
        }
      });
    } else {
      console.log(`Invalid input. Please enter a valid number between 1 and ${range}.`);
      multiplyNumbers(); // Ask for input again
    }
  });
}

// Start the multiplication process
multiplyNumbers();

