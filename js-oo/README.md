# Object Oriented JavaScript

## Part 1: Conceptual questions
1. What's the difference between object oriented programming and functional programming, and what are the benefits of OO?
2. What does it mean when one class "extends" another class?
3. What is the syntactic sugar behind the "class" keyword in JS? What are you really building?

## Part 2: Coding Challenge - Refactor your functions to be methods and attributes in OO style JS
* Your job is to build the same functionality you did for your last challenge, but rather than organizing it as individual functions, use an object oriented approach. You have room for creativity with what and how many methods and attributes to build (it is your job to interpret the instructions, which are clearly telling you to program functionally, and translate them into an OO paradigm).
* Last Week's challenge:

* If you built a Plant API for your last challenge, copy those files to this directory and edit the index.js file. If not,  add the seeds from this repository (https://github.com/allisonkadel/code-challenges/tree/master/JavaScript/building-apis) and create an API with json-server (https://github.com/typicode/json-server). Then create a new index.js file.
1. Build a function that takes the plants json data from a get request to /plants and title-cases the entire name of each plant (not just capitalize the first word)
2. Build a function `filterBySpeciesPlants` that takes in plants json data and a species name and returns only those including that species name
3. Build a function `alphabetizePlants` that takes in plants json data and returns the plants sorted alphabetically by name
4. Build a function `randomizePlants` that takes in plants json data and a nunber and returns a random set of that number of plants
5. Build a higher order function that takes in any of the above functions as a callback, a number, and any other necessary optional arguments, and returns a *function* which invokes the callback with the arguments
* Test these functions out in existing or new api call responses

## BONUS: Add the following features to your class(es)
1. at least one static method
2. at least one get and one set method (with syntactic sugar)
3. use extension (inheritance)