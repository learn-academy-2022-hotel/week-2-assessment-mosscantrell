# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: In JavaScript, a parameter is the variable that is assigned within the function. Arguments, on the other hand, are the actual values that are passed into the function following the set parameters.

Researched answer: In JavaScript, parameters can be considered a placeholder for a function's argument. The parameter is one of the variables within a function, usually named meaninfully to show what it will represent. The argument contains the values that you feed into the function. For example, a parameter could be (name), while the argument would be ("Jane Doe"). Now, when the argument is passed into the function, anywhere that (name) is utilized will be logged as "Jane Doe".

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The built in method .map() takes in predefined parameters which include a value, an index, and an array. However, only the value is required, while the other two are optional parameters to show the value's index within the array, as well as the array the value is found within.

Researched answer: The built in method .map() can take in the parameters value, index, and array. However, only value is required for .map() to run correctly. The actual parameters can be titled anything (for example; value as dog, index as carrot, and array as goldfish would all work). In order for this to be the case, the order of the parameters is crucial. It will always log in the order of value, index, and then array. If you wanted to skip index, you could replace that paramter with '_', which would skip over it when logging.

3. What is the difference between map and filter?

Your answer: The .map() method will perform an action on a given array, and then return a new array that follows the condition and argument set. The .filter() method iterates over the values within an array, performing an action on each value and logging the outcome.

Researched answer Though .map() and .filter() have many similarities, there are a few key differences. For starters, .map() will return a new array after performing an action, whereas .filter() will iterate over the existing array and return whatever the action calls for. Along with this, .filter() will return a subset of the original array, while .map() returns bits of information from the original.

4. What is iteration?

Your answer: Iteration is the act of a code being executed over each element in an array rather than over the array itself, stopping when the assigned action is completed.

Researched answer: Iteration is what occurs when code is executed over each value in a collection of items. This could be elements within an array, properties of an object, or otherwise a collection of items. Iteration is useful in that it will perform an action over every individual value rather than the entire group of them, allowing for more specific responses.

5. What is the difference between a class and an object?

Your answer: A class has the properties of an object but also defines a behaviour. It still contains key value pairs and nested sections, but contains methods that objects do not. Objects contain properties and types, and can have arguments passed through them similar to functions.

Researched answer: An object is an entity in JavaScript that contains properties and type(s). It can be compared to a cup-- a stand-alone object with properties such as color, size, material, etc. Objects have these same properties, customized to suit the needs of the code. Classes, on the other hand, are comprised of object properties that hold data. It is a type of function that can take in an argument and work with key value pairs to execute code.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in JavaScript is the act of moving and/or removing code.

Researched answer: Hoisting is a behavior in JavaScript that is used to move the declaration of functions to the beginning of their scope. This places them prior to the in-text execution of the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is the description of an application's features. This is usually told from the perspective of the user to show developers the experience they are meant to code.

2. Spread operator: The spread operator (...) is code that allows an array to be copied into another array or object.

3. React state: A state in React corresponds with components, containing the information about the component.

4. React props: "Props", in React, is short for "properties". This simply refers to an object's properties.

5. DOM events: A DOM event is the sign that an interaction with the application has occurred or will occur. This includes a way page or image loading, or when a user clicks a mouse.
