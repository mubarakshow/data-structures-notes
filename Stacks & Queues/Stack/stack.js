// Stack implementation - Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value)
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer
    }
    this.length++
    return this;
  }
  pop() {
    if (this.top === this.bottom) this.bottom = null;
    if(!this.top) return null;
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--
    return holdingPointer
  }
  isEmpty() {
    return this.length == 0 ? true : false
  }
}

const myStack = new Stack();

// Stack implementation - Array
class stackArr {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    return this;
  }
  pop() {
    this.array.push()
    return this;
  }
  isEmpty() {
    return !this.array.length ? true : false;
  }
}