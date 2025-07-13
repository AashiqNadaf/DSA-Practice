class LRUCaching {
  constructor(size) {
    this.size = size;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) return null;
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return this.map.get(key);
  }

  add(key, value) {
    if (this.map.size === this.size) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }
}

const cache = new LRUCaching(3);
cache.add("key 1", 'value 1');
cache.add("key 2", 'value 2');
cache.add("key 3", 'value 3');
console.log(cache.map);
cache.get("key 1");
console.log(cache.map);
cache.add("key 4", 'value 4');
console.log(cache.map);
