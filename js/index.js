// ----------------------------Task 1----------------------------

let a = 3; // declared variable 'a' and assigned the it with the value of '3'
let b = 5; // declared variable 'b' and assigned the it with the value of '5'
let c; // declared variable 'c'

let result; // declared variable 'result'


// task description

result = 'let a = 3;\n';
result += 'let b = 5;\n';
result += 'let c;\n';

result += '-----------\n';


// using operators

result += 'a + b = ' + (a + b) + '\n'; // a + b
result += 'a - b = ' + (a - b) + '\n'; // a - b
result += 'a * b = ' + (a * b) + '\n'; // a * b
result += 'a % b = ' + (a % b) + '\n'; // a / b
result += 'a += b = ' + (a += b) + '\n'; // a += b
result += 'a -= b = ' + (a -= b) + '\n'; // a -= b
result += 'a *= b = ' + (a *= b) + '\n'; // a *= b
result += 'a /= b = ' + (a /= b) + '\n'; // a /= b
result += 'a %= b = ' + (a %= b) + '\n'; // a %= b
result += 'a == b : ' + (a == b) + '\n'; // a == b
result += 'a != b : ' + (a != b) + '\n'; // a != b
result += 'a > b : ' + (a > b) + '\n'; // a > b
result += 'a < b : ' + (a < b) + '\n'; // a < b
result += '!a && !c : ' + (!a && !c) + '\n'; // !a && !c
result += '!a || !c : ' + (!a || !c) + '\n'; // !a || !c


//print result

alert(result);



// ----------------------------Task 2----------------------------

let first_name = "Geetanjali"; // declared variable 'first_name' and assigned it with the value of 'Geetanjali'
let last_name = "Pawase"; // declared variable 'last_name' and assigned it with the value of 'Pawase'
let email = "pawa0011@algonquinlive.com"; // declared variable 'email' and assigned it with the value of 'pawa0011@algonquinlive.com'

let output; //declared variable 'output'


// Create a sentence using the variables above and store it in the variable 'output'

output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;


//print output created from the variables above

console.log(output);
