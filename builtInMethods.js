// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
console.log("Hello World".toLowerCase());

//The includes() method is called on the string "Hello World"
//The argument is "Hello", includes() job is to decide whether said argument is part of the string
//The return value should be "true"
"Hello World".includes("Hello");
console.log("Hello World".includes("Hello"));

//The endsWith() method is called on the string "Hello World"
//The argument is "Hello", the job of endsWith() is to decide whether the string ends with the characters of said argument
//The return value should be "false"
"Hello World".endsWith("Hello");
console.log("Hello World".endsWith("Hello"));

//The endsWith() method is called on the string "Hello World"
//The argument is "rld", the job of endsWith() is to decide whether the string ends with the characters of said argument
//The return value should be "true"
"Hello World".endsWith("rld");
console.log("Hello World".endsWith('rld'));



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toUpperCase() method is called on the cityName variable, which stores the string object "Denver"
// The toUpperCase() method returns a version of the string where all the letters are capitalized
// No argument is passed for; toUpperCase() has one clear job which is to capitalize all of the letters in the string
// The console.log() statement prints the return value of the toUpperCase() method ("DENVER") to the console
var cityName = "Denver"
console.log(cityName.toUpperCase());

// The repeat() method is called on the movieName variable, which stores the string object "Moonlight"
// The repeat() method requires an argument in the form of a numerical value to specify how many times it will repeat the string in the return value
// The argument passed is 2, meaning that the repeat() method will return our string repeated twice ("MoonlightMoonlight")
var movieName = "Moonlight"
console.log(movieName.repeat(2));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The join() method is called on the bandMembers variable, which stores an array with 4 different string elements
// The join() method is used to combine all elements in an array (joined by a comma or a specified separator) into a single string
// The argument " and " is passed meaning that the newly combined elements will be separated by " and " in the returned string
// The console.log() statement prints the return value of ("John and Paul and George and Ringo")
var bandMembers = ["John", "Paul", "George", "Ringo"];
console.log(bandMembers.join(" and "));

// The includes() method is called on the partyInvitees variable, which stores an array with 4 different string elements
// The includes() method searches the array for a specified value (put forth in the argument) and prints "true" or "false" depending on whether said value is among the entries in the array
// The argument "Bob" is passed, meaning that the method will search the array to determine whether "Bob" is part of the array
// As "Bob" is not featured in the array, the console.log() statement will print the return value "false"
var partyInvitees = ["Joe", "Karen", "Jacob", "Lisa"];
console.log(partyInvitees.includes("Bob"))
