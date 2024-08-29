//      ======== TREE DATA STRUCTURE =======

/* A tree data structure is a way to hold data, which visualized looks like an actual tree, but upside down :D. The data points in the tree are called Nodes. The top one is called the root node. A node with branches leading to other nodes are called parent nodes. Leaf nodes are the nodes at the end of the tree that does not have any children.

          ========  BINARY SEARCH TREE ========

A binary search tree can only have two branches for every node, and binary search tree's are ordered, which means each subtree is less than or equal to the parent node and each right subtree is greater than or equal to the parent node.
*/

// Binary search tree

// Class to create nodes.
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      /* This recursive function simply checks the nodes and adds items accordingly */
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          } else if (data > node.data) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}
