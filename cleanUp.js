// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:

// I added spaces and semicolons to clean things up visually/organizationally.
// I changed the original console.log statement to a return statement. While this isn't necessary, it does make the function more versatile and functional
// I added a console.log statement at the end so I could see the return statement printed to my console.

function askForName() { 
  return `Hello, what is your name?`; 
}

console.log(askForName());


// EX 2:

// I added semi colons where needed.
// I added a console.log statement and quotes with interpolation so that a statement with the results are printed to the console.
function addThreeNums(first, second, third) {
var sum = first + second + third;
return sum;
      }

console.log(`The sum of 1, 2, and 3 is ${addThreeNums(1, 2, 3)}.`);
console.log(`The sum of 4, 2, and 7 is ${addThreeNums(4, 2, 7)}.`);



// EX 3:
// I fixed the spelling of "function" so that everything would work
// I compiled all the separate console.log statements into an array and used a for statement to list out the elemenets. I did this to test out writing a for statement within a function and to clean up the data so that all the steps of the recipe were under one variable rather than disparate strings in a list of console.log statements.
function makeFreshPesto() {
  var recipeSteps = ["Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper", "Pulse basil and pine nuts", "Add garlic and cheeses", "Slowly pour in oil", "Season"];  
 for(var i = 0; i < recipeSteps.length; i++) {
 console.log(recipeSteps[i]);
}
}

makeFreshPesto();


//  EX 4:

//I added semicolons where needed
//I added a console.log statement with interpolation at the end so that the console would print a clean, clear result of the function
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg;
  }
  console.log(`The average of 45 and 47 is ${average(45, 47)}.`);
