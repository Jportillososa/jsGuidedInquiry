// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another
// number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output:
// "3 + 4 = 7"

// program for a simple calculator
//const cannot be redeclared or reassigned

const number1 = parseFloat(prompt('To solve equation enter first number: '));

//parseFloat ^^turns string into a number that we can perform calculations on

const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// This displays the result
console.log(`${number1} ${operator} ${number2} = ${result}`);