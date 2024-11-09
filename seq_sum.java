public class SequenceSum {
    public static int sum(int start, int end, int step) {
        //your code here
        if(start>end) return 0;

        int sum = 0;
        for(int i=start; i<=end; i+=step)
        {
            sum += i;
        }

        return sum;
    }
}
