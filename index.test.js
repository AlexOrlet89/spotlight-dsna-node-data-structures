const { LinkedListNode, LinkedList } = require(".");

describe("LinkedListNode class", () => {
  it("should add a node at the end of our LinkedList", () => {
    const list = new LinkedList("A");
    list.add("B");
    console.log(list.getList());
    expect(list.getList().length).toBe(2);
    list.add("C");
    expect(list.getList().length).toBe(3);
  });
});
