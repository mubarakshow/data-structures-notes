class HashTable {
  constructor(size=0) {
    this.data = new Array(size)
  }

  // hash function
  _hash(key) {
    let hash = 0;
    for (let i=0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) 
    }
    return hash;
  }

  set(key, value='') {
    this.data.push([key, value])
    return this.data;
  }
  get(key) {
    let foundArr = this.data.map(arr => arr.indexOf(key)).filter(indexList => indexList >=0)[0]
    return this.data[foundArr][1]
  }

  clear() {
    this.data.length = 0;
    return this.data.length;
  }
}


// Objects in javascript
// Map()
// Set()
// NOTE: look out for collissions 