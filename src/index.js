
// You should implement your task here.

module.exports = function towelSort(matrix) {
  
  if (matrix == undefined || matrix.length == 0) return [];

  let mainArr = [];

  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse();
  }
  // change all even array indexes to their reverse verison


  for (let i = 0; i < matrix.length; i++) {
    mainArr = mainArr.concat(matrix[i]);
  };
  
  return mainArr;
};