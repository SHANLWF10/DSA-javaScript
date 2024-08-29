//                     ======== SETS ========

/* A set is also like an array. Unlike an array, sets does not contain duplicate values and are not arranged in a specific order (not sorted). */

function mySet() {
  let collection = []; // our Set

  //  here we check for the element we are getting
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //   returns all the items in the set
  this.values = function () {
    return collection;
  };

  //this add an new element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return console.log("This item already exists!");
  };

  //   this method removes an element
  this.remove = function (element) {
    if (!this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //   this method gives the size of our set
  this.size = function () {
    return collection.length;
  };
}

let newSet = new mySet();

newSet.add(2);
newSet.add("ship");
// newSet.add("ship");/
console.log(newSet.values());

/* NOTE: Javacript has "sets" already built into it. The code is made from scratch.Just to understand how sets work behind the scene. */
