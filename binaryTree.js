class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add(node) {
    if (node < this.value && this.left) {
      this.left = new BinaryTreeNode(this.left);
      this.left.add(node);
    }
    if (node < this.value && !this.left) {
      this.left = node;
    }
    if (node > this.value && this.right) {
      this.right = new BinaryTreeNode(node);
    }
    if (node > this.value && !this.right) {
      this.right = node;
    }
    // if node is less than value go to the left
    // if node is greater than value
    // if nothing there then this.left = value
  }
}

//BLESS IT I WAS SO CLOSE!!!!

//Bradley's solution
// class BinaryTreeNode {
//   constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }

//   add(node) {
//       if (node.value < this.value) {
//           if (!this.left) {
//               this.left = node;
//           } else {
//               this.left.add(node);
//           }
//       } else {
//           if (!this.right) {
//               this.right = node;
//           } else {
//               this.right.add(node);
//           }
//       }
//   }
// }

class BinaryTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
