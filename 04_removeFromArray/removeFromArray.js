const removeFromArray = function(array, ...args) {
  let result = array;
  for (let arg of args) {
    result = result.filter((elem) => elem !== arg);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
