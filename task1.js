//variables and datatype
let num=2;
console.log(num);
console.log("type of num is " + typeof(num));

let num2=3.5;
console.log(num2);
console.log("type of num2 is " + typeof(num2));

let str="Hello";
console.log(str);
console.log( "type of str is " + typeof(str));

let nullval=null;
console.log(nullval);
console.log("type of nullval is " + typeof(nullval));

let undef
console.log(undef);
console.log("type of undef is " + typeof(undef));

let bool=true;
console.log(bool);
console.log("type of bool is " + typeof(bool));

//Modulus
console.log( "modulus :" + (5%49%89));

// Operators in javascript
// arithmetic operators

console.log("Arithemetic Operators:- ")
let a=10;
let b=20;

console.log(" a - b = "+ (a-b));
console.log(" a + b = "+ (a+b));
console.log(" a / b = "+ (a/b));
console.log(" a % b = "+ (a%b));
console.log(" a * b = "+ (a*b));


// comparision operators
console.log("Comparision Operators:- ")
console.log(" is a greater than b :"+ (a>b));
console.log(" is a less than b :"+ (a<b));
console.log(" is a greater than equal to b :"+ (a<=b));
console.log(" is a less than equal b :"+ (a>=b));
console.log(" is a equal to b :"+ (a==b));

// Assignment operators
let x = 5, y = 10, z = 15;
console.log("assign value of y to x is "+ (x= y ));
console.log("assign value +=1 to x is "+ (x += 1 ));
console.log("assign value -= to x is "+ (x -= 1 ));
console.log("assign value *= to x is "+ (x *= 5 ));
console.log("assign value /= to x is "+ (x /= 5 ));
console.log("assign value %= to x is "+ (x %= 2 ));


console.log("Table of 7:- ");
for (let i = 0; i <= 10; i++) {
    console.log("7 * "+  i  + " = " + (i*7));
    }