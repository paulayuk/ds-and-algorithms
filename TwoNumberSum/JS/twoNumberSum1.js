function twoNumberSum(array, targetSum) {
  // Write your code here.
  if(!array.length){
    return;
  }

  if(typeof targetSum !== 'number'){
    return;
  }
  
  let newTargetSumArr = [];

  for(i = 0; i < array.length; i++){
    for(j = i+1; j < array.length; j++){
      if(array[i] + array[j] == targetSum){
        newTargetSumArr.push(array[i], array[j]);
      }
    }
  }

  return newTargetSumArr;
}
