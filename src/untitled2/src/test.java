public class test {

    public static void main(String[] args) {
        int [] array = {1,6,3,2,8,9,7,11,12,19,18};
        int a = array[0];
        int b = array[1];
        int temp;
        for (int i = 2; i < array.length; i++) {
            if (a > b && b > array[i]){
                max = array[i];
                continue;
            }else
        }
        System.out.println("số lớn nhất là: "+ max);
        System.out.println("số lớn thứ 2 là: "+ max2);

    }
}
// a, b, c

// a>b>c
// a>c>b
// b>c>a
// b>a>c
// c>a>b
// c>b>a