/*
## Overview
Create a function called `mathEquation` that calculates two numbers depending on the operator

## Instructions
1. Create a function called `mathEquation`
2. The function should accept 3 arguments (inputs): `a`, `b`, and `operation`
3. Depending on the operation, calculate `a` and `b`. For example, if operation is add then return a + b.
4. The operations should be: add, subtract, multiply, and divide.
5. Test with multiple inputs just to see if it's working as intended.
6. If the user divides by zero return `Error, cannot divide by zero.`


## Test cases
| a  | b  | operation | result                       |
|----|----|-----------|------------------------------|
| 2  | 3  | add       | 5                            |
| 5  | 10 | subtract  | -5                           |
| 10 | 10 | divide    | 1                            |
| 3  | 3  | multiply  | 9                            |
| 10 | 0  | divide    | Error, cannot divide by zero.|
*/

// Write your code here
function mathEquation(a, b, operation) {
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        if (b === 0) {
            return "Error, cannot divide by zero.";
        } else {
            return a / b;
        }
    }
}

const triggerEquation = () => {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
}

class MathEquation {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        if (this.operation === "add") {
            return this.a + this.b;
        } else if (this.operation === "subtract") {
            return this.a - this.b;
        } else if (this.operation === "multiply") {
            return this.a * this.b;
        } else if (this.operation === "divide") {
            if (this.b === 0) {
                return "Error, cannot divide by zero.";
            } else {
                return this.a / this.b;
            }
        }
    }
}