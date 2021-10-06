public class test {


    public static void main(String[] args) {
        int[] arr = {3, 6, 2, 5, 9, 8, 7, 21, 18, 25, 16};
        for (int i = 0; i < arr.length-1; i++) {
            for (int j = arr.length-1; j > i; j--){
                if (arr[j] > arr[j-1]) {
                    int a = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = a;
                }
            }
        }

        for (int arr1: arr) {
            System.out.println(arr1);
        }
    }
}
