class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add(node) {
    // if node is less than value go to the left
    // if node is greater than value
    // if nothing there then this.left = value 
    this.left = new BinaryTreeNode(node);
  }
}
  
class BinaryTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }
}