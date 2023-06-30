// 1.Program to find product of digits of a given number

let num = parseInt(prompt("Enter a number:"));
let product = 1;
while (num != 0) {
    product = product * (num % 10);
    num = Math.floor(num / 10);
}
console.log("product of digits:" + product);
