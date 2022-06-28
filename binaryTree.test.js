const { BinaryTree, BinaryTreeNode } = require("./binaryTree");

describe("binary tree", () => {
  it("should put the number one on the left most branch of our tree, as it will be the lowest number I'm going to use", () => {
    const tree = new BinaryTree(15);
    console.log(tree);
    tree.root.add(10);
    console.log(tree);
    tree.root.add(5);
    console.log(tree);
    tree.root.add(1);
    console.log(tree);
  });
});
