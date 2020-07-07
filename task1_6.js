const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let myarr="12 215 2145";
let arr=myarr.map(element => pasrseint(element));
let arr1=myarr.map(number);
let arr2-= myarr.map(val => +val)
});
