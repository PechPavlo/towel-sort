
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
     result = i % 2 ? result.concat(matrix[i].reverse()) : result.concat(matrix[i]);
    }
  }
  console.log(result);
  return result;
}
