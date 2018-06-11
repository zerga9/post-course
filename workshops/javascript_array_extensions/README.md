## Objectives

I can identify when to use an array prototype method to manipulate the contents of an array
I can use array prototype methods to manipulate the contents of an array


## Introduction

Traditional Javascript

```
var zoo = ['Lions', 'Tigers', 'Bears'];

for (var i = 0; i < zoo.length; i++) {
  console.log(zoo[i]);
}
```

With the 'forEach' operator:

```
// Using ES5 anonymous function
zoo.forEach(function(animal) {
  console.log(animal);
});

// Using ES6 anonymous function
zoo.forEach((animal) => console.log(animal));

// Using ES6 named function
const logAnimal = (animal) => console.log(animal);
zoo.forEach(logAnimal);s
```

Where to read about array prototype methods:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

When to use array prototype methods - what are some things that you might want to do to a collection?

Break it down:
- What do you want to process - 1 element, some elements, or all?
- What do you want to output - the same array, a new array, an aggregate?

# Exercises

1. I have a collection of animals and I want to return all which are mammals
2. I have a collection of animals and I want to mutate all of the mammals into lizards
3. I have a collection of animals and I want to find out how many birds I have
4. I have a collection of animals and I want a list of their names
5. I have a collection of animals and I want a list of their names in a single string, delimited by a comma
6. I have a collection of animals in subcategories and I want to a single array
7. I have a collection of animals in subcategories and I want to remove all of the ones which are green
8. I have a collection of animals and I want to find out if any of them are green
9. I have a collection of animals and I want to find out if all of them are green
