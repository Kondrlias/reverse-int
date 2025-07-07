module.exports = function reverse(num) {
  const arrNum = Math.abs(num).toString().split('');
  return arrNum.reverse().join('');
};
