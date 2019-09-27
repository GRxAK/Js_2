// Lesson 8.3 --->
// матемотические методы для тестирования

// сумма
const mSum = (x, y) => {
  if (x === undefined || y === undefined) {
    return 'NaN';
  }
  let result = x + y;
  return result;
};

// разница
const mSubt = (x, y) => {
  if (x === undefined || y === undefined) {
    return 'NaN';
  }
  if (x === String(x) || y === String(y)) {
    return 'NaN';
  }
  let result = x - y;
  return result;
};

// произведение
const mMult = (x, y) => {
  if (x === undefined || y === undefined) {
    return 'NaN';
  }
  if (x === String(x) || y === String(y)) {
    return 'NaN';
  }
  let result = x * y;
  return result;
};

// деление
const mDivi = (x, y) => {
  if (x === undefined || y === undefined) {
    return 'NaN';
  }
  if (x === String(x) || y === String(y)) {
    return 'NaN';
  }
  let result = x / y;
  return result;
}

module.exports = {
  mSubt: mSubt,
  mSum: mSum,
  mMult: mMult,
  mDivi: mDivi
};

