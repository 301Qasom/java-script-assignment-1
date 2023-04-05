// // write a java script program 'that give you grade according to your number


var physics = parseFloat(prompt("Enter Physics marks: "));
var chemistry = parseFloat(prompt("Enter Chemistry marks: "));
var biology = parseFloat(prompt("Enter Biology marks: "));
var mathematics = parseFloat(prompt("Enter Mathematics marks: "));
var computer = parseFloat(prompt("Enter Computer marks: "));


var totalMarks = physics + chemistry + biology + mathematics + computer;
var percentage = (totalMarks / 500) * 100;


var grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`Grade: ${grade}`);



// Write a js program to check weather a number is even or not

var number =+ prompt("enter number")
var numbers = (number%2);

if (numbers==0){
    console.log("number is even");
}
else{
    console.log("numbers is odd");
}

// Write a js program to check weather a year is leap or not

var year =+ prompt("enter year")
var year2 = (year%400)
if (year2==0){
    console.log("year is leap")
}
else{
    console.log("year is not leap")
}

// Write a js program to find maximum between two numbers

var num1 =+ prompt ("enter number 1") 
var num2 =+ prompt("enter number 2")


if (num1 > num2) {
  console.log("num1 is maximum");
} else {
  console.log("num2 is maximum");
}

// write a js program to input basic salery of an employee and calculate its gross salery 


var basicSalary =  parseFloat(prompt("Enter Basic Salary:"));


if (basicSalary <= 10000) {
    var HRA = (basicSalary * 20) / 100;
    var DA = (basicSalary * 80) / 100;
    var grossSalary = basicSalary + HRA + DA;
  console.log(`Gross Salary: ${grossSalary}`);
} else if (basicSalary <= 20000) {
    var HRA = (basicSalary * 25) / 100;
    var DA = (basicSalary * 90) / 100;
    var grossSalary = basicSalary + HRA + DA;
  console.log(`Gross Salary: ${grossSalary}`);
} else {
    var HRA = (basicSalary * 30) / 100;
    var DA = (basicSalary * 95) / 100;
    var grossSalary = basicSalary + HRA + DA;
  console.log(`Gross Salary: ${grossSalary}`);
}

// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition

var unitCharges = parseFloat(prompt("Enter electricity unit charges:"));


unitCharges = Number(unitCharges);


var totalBill = 0;

if (unitCharges <= 50) {
    totalBill = unitCharges * 0.50;
} else if (unitCharges <= 150) {
    totalBill = (unitCharges) * 0.75;
} else if (unitCharges <= 250) {
    totalBill = (unitCharges) * 1.20;
} else {
    totalBill = (unitCharges) * 1.50;
}


var surcharge = totalBill * 0.20;
totalBill += surcharge;


console.log("Total electricity bill: Rs. " + totalBill);

//write a js program to calculate profit or loss

var  costPrice =+ parseFloat(prompt("Enter purchase prise")) ;
var  sellingPrice =+ parseFloat(prompt("enter sale price"));


var  profit = sellingPrice - costPrice;
var  loss = costPrice - sellingPrice;


if (profit > 0) {
  console.log("profit of $" + profit);
} else if (loss> 0) {
  console.log(" loss of $" + loss);
} else {
  console.log("You neither made a profit nor incurred a loss.");
}

//Write a js program to find maximum between three numbers.

var num1 = parseFloat(prompt("Enter num 1"));
var num2 = parseFloat(prompt("Enter num 2"));
var num3 = parseFloat(prompt("Enter num 3"));


if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}

// Write a js program to check whether a number is negative, positive or zero

var number = parseFloat(prompt("enter value")) 

if (number > 0) {
  console.log(`${number} is a positive number`);
} else if (number < 0) {
  console.log(`${number} is a negative number`);
} else {
  console.log(`${number} is zero`);
}

//Write a js program to check whether a number is divisible by 5 and 11 or not

var numb =+ parseFloat(prompt("enter number"))
if (numb % 5 == 0 && numb % 11 == 0){
    console.log("number is  divisible by 5 and 11" );
}
else {
    console.log("number is not divisible by 5 and 11");
}

//Write a js program to check whether a character is alphabet or not


var character = (prompt("enter value"));


if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
  console.log(character + ' is an alphabet');
} else {
  console.log(character + ' is not an alphabet');
}

// Write a js program to input any alphabet and check whether it is vowel or consonant

var alphabet = prompt("Enter an alphabet:"); 

if (alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u' || 
    alphabet == 'A' || alphabet == 'E' || alphabet == 'I' || alphabet == 'O' || alphabet == 'U') {
  console.log(alphabet + " is a vowel."); 
} else {
  console.log(alphabet + " is a consonant."); 
}

// Write a js program to check whether a character is uppercase or lowercase alphabet
var alphabet1 = (prompt("enter alphabet"));
if (alphabet1 >=`A` && alphabet1 <=`Z`){
    console.log("uppercase");
}
else {
    console.log("lowercase");
}

// Write a js program to input month number and print number of days in that month

var month = Number(prompt("Enter month number (1-12):"));
var days;
if (month === 2) {
  days = 28;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  days = 30;
} else {
  days = 31;
}
console.log(`Number of days in month ${month} is ${days}.`);

// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle

var side1 = parseFloat(prompt("enter side 1"));
var side2 = parseFloat(prompt("enter side 2")); 
var side3 = parseFloat(prompt("enter side 3")); 

if (side1 === side2 && side2 === side3) {
  console.log("This is an equilateral triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("This is an isosceles triangle");
} else {
  console.log("This is a scalene triangle");
}







