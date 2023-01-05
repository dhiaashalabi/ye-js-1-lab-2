# JS Class 1 Math equations

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