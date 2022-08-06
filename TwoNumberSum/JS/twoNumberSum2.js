function twoNumberSum(array, targetSum) {
  // Write your code here.
	let arr = {}
	
	for(i of array){
        let difference = targetSum - i;
		
		if(difference in arr){
          return [difference, i];
        }
        
        arr[i] = true;
	}

    return [];
}