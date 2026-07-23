// Variables in JS
var x = 10;
var x = 20;
x = 30;
console.log(x)

if (true){
    var message = "Hello";
}
// var in JS is not block-scoped
console.log(message);

// *****************************************************************
// let keyword based variable
let score = 100;
//let score = 100; //SyntaxError: Identifier 'score' has already been declared
score = 180;
console.log(score) 

if (true){
    let secret = "Password@123" // let in JS is block-scoped
}
//console.log(secret) //ReferenceError: secret is not defined

// const: variable which cannot be reasigned after its declaration
if (true){
const pi = 3.14159;
//pi = 29 //TypeError: Assignment to constant variable.
}
//console.log(pi) //ReferenceError: pi is not defined


//var: function scoped | Not recommended
//let & const: block-scoped

//var: function scoped
function test(){
    var a = 10;
    let b = 20;
    const c = 60;
}
console.log(a);
console.log(b);
console.log(c);