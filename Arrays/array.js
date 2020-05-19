class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // this is used for quick look up of an array elements in javascript. 
  // works just like ----> arr[i] 
  get(index) {
    return this.data[index]
  }

  // we're basically remeplementing the javascript Array.prototype.push() method.
  // we're using the rest operator (...) to pass in X number of argements... 
  // ... then push each argument as an individual element of the array. 
  push(...items) {
    for (let item of items) {
      this.data[this.length] = item;
      this.length++;
    }
    return this.length;
  }

  // we're implementing the javascript Array.prototype.pop() to remove the last element of an array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // this method allows us to remove an element from a particular index of an array.
  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index)
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--
  }
}

const newArr = new MyArray();
