const readline = require('readline');
const work = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function valuesToNumber(input, max = Infinity) {
  const num = Number(input);
  if (!isNaN(num) && num >= 1 && num <= max) {
    return num;
  } else {
    return null;
  }
}
console.log(work);
function multiplyNumbers() {
  work.question('Enter a number: ', (input) => {
    if (input.toLowerCase() === 'exit') { //This line checks if the user input, converted to lowercase, is equal to the string 'exit'
      console.log('Goodbye!');
      work.close();
    } else {
      const number = valuesToNumber(input);

      if (number !== null) {
        work.question('Enter the number of iterations up to 999: ', (iterationsInput) => {
          const iterations = valuesToNumber(iterationsInput, 999);
          if (iterations !== null) {
            for (let i = 1; i <= iterations; i++) {
              const result = number * i;
              console.log(`${number} * ${i} = ${result}`);
            }
          } else {
            console.log('Invalid input for the number of iterations. Please enter a valid number (up to 999).');
          }

          // Continue the loop
          multiplyNumbers();
        });
      } else {
        console.log('Invalid input for the number. Please enter a valid number.');
        // Continue the loop
        multiplyNumbers();
      }
    }
  });
}

// Start the multiplication process
multiplyNumbers();
