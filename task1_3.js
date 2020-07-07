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
let userInput1=userInput.split(" ");
let firstname=userInput1[0];
let lastname=userInput1[1];
let maternal_status=userInput1[2];
let country= userInput1[3];
let age= userInput1[4];
//end-here
});
