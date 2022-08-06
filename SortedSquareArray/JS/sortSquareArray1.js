function sortedSquaredArray(array) {
  // Write your code here.
  let newArr = [];
  
  for(i = 0; i < array.length; i++){
    newArr.push(array[i] ** 2)
  }
  return newArr.sort(function(a, b){return a - b});
}
