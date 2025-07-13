const operatorObj = {
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

const evaluate = (expr) => {
  let numArr = [];
  let oppArr = [];
  let numStr = '';

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if ('+-*/'.includes(ch)) {
      numArr.push(Number(numStr));
      numStr = '';
      oppArr.push(ch);
    } else {
      numStr += ch;
    }
  }
  numArr.push(Number(numStr));

  const handleOperators = (ops) => {
    let i = 0;
    while (i < oppArr.length) {
      if (ops.includes(oppArr[i])) {
        const result = operatorObj[oppArr[i]](numArr[i], numArr[i + 1]);
        oppArr.splice(i, 1);
        numArr.splice(i, 2);
        numArr = insert(numArr, i, result);
        i = 0;
      } else {
        i++;
      }
    }
  };

  handleOperators(['*', '/']);
  handleOperators(['+', '-']);

  return numArr[0];
};

const calculate = (input) => {
  const removeSpaces = (s) => s.replace(/\s+/g, '');
  let str = removeSpaces(input);

  const evaluateBrackets = (s) => {
    while (s.includes('(')) {
      let lastOpen = -1;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') lastOpen = i;
        if (s[i] === ')') {
          const inside = s.slice(lastOpen + 1, i);
          const value = evaluateBrackets(inside);
          s = s.slice(0, lastOpen) + value + s.slice(i + 1);
          break;
        }
      }
    }
    return evaluate(s);
  };

  return evaluateBrackets(str);
};
