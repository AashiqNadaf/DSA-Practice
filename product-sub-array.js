function subarraysProductLessThanK(arr, k) {
  const result = [];
  let left = 0;
  let product = 1;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];

    while (product > k) {
      product /= arr[left];
      left++;
    }

    let temp = [];
    for (let i = right; i >= left; i--) {
      temp.unshift(arr[i]);
      result.push([...temp]);
    }
  }

  return result;
}
