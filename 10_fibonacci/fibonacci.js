const fibonacci = function (number) {
  if (typeof number === "string") {
    number = parseInt(number);
  }
  if (number < 0) {
    return "OOPS";
  }
  let a = 1;
  let b = 0;
  for (let i = 0; i < number; i++) {
    [a, b] = [b, b + a];
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
