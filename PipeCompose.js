const addFive = (num) => num + 5;
const substractTwo = (num) => num - 2;
const multiplyFour = (num) => num * 4;

const compose = (...args) => {
  return function (num) {
    let result = num;
    for (let i = args.length - 1; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  };
};
const pipe = (...args) => {
  return function (num) {
    let result = num;
    for (let i = 0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  };
};

const evaluate = compose(addFive, substractTwo, multiplyFour);
const evaluate2 = pipe(addFive, substractTwo, multiplyFour);

console.log(evaluate(5));
console.log(evaluate2(5));
