const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	if (mathSymbol === "+") {
		console.log ('addition',num1 + num2)
	}
    if (mathSymbol === "-") {
		console.log ('subtraction' ,num1 - num2)
	}
	if (mathSymbol === "*") {
		console.log ('multiplication' ,num1 * num2)
	}
	if (mathSymbol === "/") {
		console.log ('division' ,num1 / num2)
	}
	if (mathSymbol === "sqrt") {
		console.log ('square root' ,Math.sqrt(num1))
	}


	// This line closes the connection to the command line interface.
	reader.close()

});
