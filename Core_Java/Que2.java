public class Que2 {
    public static void main(String[] args) {
        int number = 12;
        int sumOfFactors = 0;

        for (int i = 1; i <= number; i++) {
            if (number % i == 0) {
                sumOfFactors += i;
            }
        }

        System.out.println(sumOfFactors);
    }
}
