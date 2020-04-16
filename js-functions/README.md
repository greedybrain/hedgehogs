# JavaScript Functions

## Part 1: Conceptual questions
1. What do we mean when we say functions are first-class objects?
2. What is function scope and how does the scope chain work?
3. What is pass-by-value vs pass-by-reference and which rule applies to objects?

## Part 2: Coding Challenge - Build some Functions
* If you built a Plant API for your last challenge, copy those files to this directory and edit the index.js file. If not,  add the seeds from this repository (https://github.com/allisonkadel/code-challenges/tree/master/JavaScript/building-apis) and create an API with json-server (https://github.com/typicode/json-server). Then create a new index.js file.
1. Build a function that takes the plants json data from a get request to /plants and title-cases the entire name of each plant (not just capitalize the first word)
2. Build a function `filterBySpeciesPlants` that takes in plants json data and a species name and returns only those including that species name
3. Build a function `alphabetizePlants` that takes in plants json data and returns the plants sorted alphabetically by name
4. Build a function `randomizePlants` that takes in plants json data and a nunber and returns a random set of that number of plants
5. Build a higher order function that takes in any of the above functions as a callback, a number, and any other necessary optional arguments, and returns a *function* which invokes the callback with the arguments
* Test these functions out in existing or new api call responses

## BONUS: encapsulate this new functionality using the module pattern
* We know functions are just objects. Group the above functions you wrote into a module-like object.
1. Create an object with the property names equal to the function names and the values equal to an *anonymous* function
2. Wrap this object inside an immediately invoked function expression (return the object in the body of the function)
3. Assign this IIFE to a variable
4. Refactor your function invocations to avoid getting ReferenceErrors