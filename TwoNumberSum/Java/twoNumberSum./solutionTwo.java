import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    // Write your code here.
    Set<Integer> data = new HashSet<Integer>();
    for (int num: array){
      if (data.contains(targetSum-num)) {
        return new int[]{targetSum-num, num};
      } else {
        data.add(num);
      }
      
    }
    return new int[0];
  }
}

