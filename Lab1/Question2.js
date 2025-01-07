function calculator(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed!";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operation!";
    }

    return `The result of ${num1} ${operation} ${num2} is: ${result}`;
}

let num1 = prompt("Enter the first number:");
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");

let output = calculator(num1, num2, operation);
console.log(output);
alert(output);
