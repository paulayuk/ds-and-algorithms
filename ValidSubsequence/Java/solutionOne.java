import java.util.*;

class Program {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
        // Write your code here.
        int index = 0;
        for (int arr:array) {
            System.out.println(index);
            if (arr == sequence.get(index)) {
                index++;
            }
            if (index == sequence.size()) {
                return true;
            }
        }
        return false;
    }
}