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
    } else {
      const number = valuesToNumber(input);

      if (number !== null) {
        work.question('Enter the number of ITERATIONS: ', (iterationsInput) => {
          const iterations = valuesToNumber(iterationsInput);
          if (iterations !== null) {
            for (let i = 1; i <= iterations; i++) {
              const result = number * i;
              console.log(`${number} * ${i} = ${result}`);
            }
          } else {
            console.log('Invalid input for the number of iterations. Please enter a valid number.');
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
