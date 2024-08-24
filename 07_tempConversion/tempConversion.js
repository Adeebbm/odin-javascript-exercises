const convertToCelsius = function(f) {
  let c = (5/9)*(f - 32);
  return Math.floor(c) == c ? c : parseFloat(c.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let f = (9/5)*c + 32;
  return Math.floor(f) == f ? f : parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
