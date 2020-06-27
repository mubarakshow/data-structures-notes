// singly LL 10 ---> 5 ---> 16 ---> null
// doubly LL 10 <===> 5 <===> 16 ---> null

class Node {
  constructor(value) {
    this.value = value,
    this. next = null;
  }
}

class DoublyLinkedList {
  constructor(value = 10) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  prepend(item) {
    let node = new Node(item)
    this.head.prev = this.tail;
    node.next = this.head;
    this.head = node;
    this.length++
    return this;
  }

  append(item) {
     const node = new Node(item)
     node.prev = this.tail;
     this.tail.next = node;
     this.tail = node;
     this.length++;
     return this;

  }

  printList() {
    const array = [];
    let curr_node = this.head;
    while (curr_node !== null) {
      array.push(curr_node.value);
      curr_node = curr_node.next;
    }
    return array;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.append(value)
      return this.printList()
    } 
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }

    let newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let curr_node = this.head;
    while (counter !== index) {
      curr_node = curr_node.next
      counter++
    }
    return curr_node;
  }

  remove(index) {
    // check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }

}