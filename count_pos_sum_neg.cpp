#include <vector>

std::vector<int> countPositivesSumNegatives(std::vector<int> input)
{
    if(input.size() == 0) return {};

    int countPos = 0;
    int sumNeg = 0;

    for(int i=0; i<input.size(); i++)
    {
        if(input[i] > 0)
        {
            countPos++;
        }
        else if(input[i] < 0)
        {
            sumNeg += input[i];
        }
    }

    return {countPos, sumNeg};
}