function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqPos = 0;
  for(i = 0; i < array.length; i++){
    if(seqPos == sequence.length){
      break;
    }
    if(array[i] === sequence[seqPos] && seqPos < sequence.length){
      seqPos++;
    }
  }

  return seqPos === sequence.length;
}