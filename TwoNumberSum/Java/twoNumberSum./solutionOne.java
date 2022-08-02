import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    // Write your code here.
    
    for (int i = 0; i < array.length; i++) {
      for (int j = 0; j < array.length; j++) {
        if (i == j) {
          ;
        } else {
          if ((array[i] + array[j]) == targetSum) {
            int result[] = {array[i], array[j] };
            return result;
          }
        }
      }
    }
    return new int[0];
  }
}
