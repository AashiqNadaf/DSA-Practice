class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] >= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] =
        [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  bubbleDown() {
    let idx = 0;
    const len = this.heap.length;
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let largest = idx;

      if (left < len && this.heap[left] > this.heap[largest])
        largest = left;
      if (right < len && this.heap[right] > this.heap[largest])
        largest = right;

      if (largest === idx) break;
      [this.heap[idx], this.heap[largest]] =
        [this.heap[largest], this.heap[idx]];
      idx = largest;
    }
  }
}

function minKElements(arr, k) {
  const heap = new MaxHeap();

  for (let num of arr) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }

  return heap.heap;
}
