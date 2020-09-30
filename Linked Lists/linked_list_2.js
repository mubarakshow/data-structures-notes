// Traversy Media Tutorial

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(value) {
    this.head = new Node(value, this.head)
    this.size++
  }

  // Insert last node
  insertLast(value) {
    let node = new Node(value);
    let current;
    // if empty, make head
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        console.log(current.value)
        current = current.next; 
      }
    }
  }
  
  // Insert at index
  insertAt(value, index) {
    // if index out of range
    if (index > 0 && index > this.size) return;
    // if first index
    if(index === 0) {
      this.head = new Node(value, this.head)
      return this;
    }
    const node = new Node(value);
    let current, previous;

    // set current to first
    current = this.head;
    
  }
  
  // Get at index
  
  // Remove at index
  
  // Clear list
  
  // Print list data
  printListData() {
    let current = this.head;
    while(current) {
      console.log(current.value)
    }
  }
}
