
const _ = {};

 _.clamp = (number, lower, upper) => {
  let lowerClampedValue  = Math.max(number, lower);
  let clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
};
_.inRange = (number, start, end) => {

    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (end < start) {
      let newStart = end;
      end = start;
      start = newStart;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
};
_.words = (text) => {
  let words = text.split(' ');
  return words;
};
_.pad = (str, length) => {
  if (length <= str.length) {
    return str;
  }
  let startPaddingLength = Math.floor((length - str.length) / 2);
  let endPaddingLength = length - str.length - startPaddingLength;
  let paddedString = (' ').repeat(startPaddingLength);
  paddedString += str;
  paddedString += (' ').repeat(endPaddingLength);
  return paddedString;
};

_.has = function (obj, key) {
  let hasValue = obj[key] !== undefined;
  return hasValue;
};
_.invert = function (obj) {
    let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
};
_.findKey = function (obj, predicate) {
    for (let key in obj) {
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue)
        return key;

    }
    return undefined;
};
_.drop = function (array, n) { 
  if (!n) {
    n = 1;
  }
  let droppedArray = array.slice(n);
  return droppedArray;
};
_.dropWhile = function (array, predicate) {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index));
    let droppedArray = array;
  droppedArray = this.drop(array, dropNumber);
    return droppedArray;
};
_.chunk = function (array, size) {
  if(!size) {
      size = 1;
  }
  let arrayChunks = [];
  for (let i = 0; i < array.length; i += size) {
    let arrayChunk = array.slice(i, i+size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;

};
// Do not write or modify code below this line.
module.exports = _;