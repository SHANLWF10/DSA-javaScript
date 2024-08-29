//      ======== QUEUE =======
/* 
The queue is similar to a stack, but with one major difference, that a queue follows a "first in first out"(FIFO) principle. Which means the item added first will be removed first.
*/

function Queue() {
  collection = [];
  // this shows whats in our queue
  this.print = function () {
    console.log(collection);
  };

  // This pushes the first element to the queue
  this.enqueue = function (element) {
    collection.push(element);
  };

  // this removes the first element of the queue
  this.dequeue = function () {
    return collection.shift();
  };

  // this returns the first element of the queue without removing it
  this.front = function () {
    return collection[0];
  };

  // this returns the size of our queue
  this.size = function () {
    return collection.length;
  };

  // this check if our queue is empty or not
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let q = new Queue();

// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// q.print();

/* NOTE: This roughly gives an idea on how queues work, this not an indepth version of a queue. This is also not a priority queue.
 */
