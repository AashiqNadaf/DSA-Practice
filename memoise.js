const costlyFunction = (index) => {
  let res = [];
  for (let i = 0; i < 10000000; i++) {
    res.push(i);
  }
  return res[index];
};

function memoise(cb, context) {
  const obj = {};
  return function (...args) {
    const arguments = JSON.stringify(args);
    if (!obj[arguments]) {
      const res = cb.call(context || this, ...args);
      obj[arguments] = res;
    }

    return obj[arguments];
  };
}

console.time('first call');
costlyFunction(10);
console.timeEnd('first call');
console.time('second call');
costlyFunction(10);
console.timeEnd('second call');

const memoiseCF = memoise(costlyFunction);
console.time('mem first call');
memoiseCF(10);
console.timeEnd('mem first call');
console.time('mem second call');
memoiseCF(10);
console.timeEnd('mem second call');
