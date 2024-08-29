/*  Stack is a type of data structure which follow the "last in first out"(LIFO) principle, which simply means that the item added at the end will get taken 
first.  */

/* An array can be used as a stack, because it also has the functions of a stack, like, push, pop, shift and unshift, etc. */

//  ====== THE CODE BELOW IS USING AN ARRAY AS A STACK. ======

// A PALINDROME

let letters = []; // this is our stack.

let word = "racecar";

let rword = ""; // This is the reversed word.

// this loop is pushing the words into our stack.
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// this loop is pushing the words into our rword;

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}
// this code checks if the word is palindrome or not.
if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

// ===== THE CODE BELOW IS A REAL STACK IMPLEMENTED IN JS =====

// creates a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  //  Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // returns the value at the end of the stack
  this.peek = function (value) {
    return this.storage[this.count - 1];
  };
};

let newStack = new Stack();

// newStack.push(1);
// console.log(newStack.peek());
// console.log(newStack.pop());

// NOTE: the code above can also be achived using javaScript Classes.
