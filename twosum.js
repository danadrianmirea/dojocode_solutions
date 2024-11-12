function twoSum(nums, target) 
{
  for(var i=0; i<nums.length-1; i++) {
    for(var j=i+1; j<nums.length; j++) {
      if(nums[i]+nums[j] == target) {
        return [i,j];
      }
    }
  }
}

function twoSumOptimal(nums, target)
{
    const numToIndex = {};

    for(var i=0; i<nums.length; i++)
    {
        const num = nums[i];
        const complement = target - num;

        if(complement in numToIndex)
        {
            return [numToIndex[complement], i];
        }

        numToIndex[num] = i;
    }

    return [];
}

module.exports = {
  twoSum
};

console.log(twoSum([3, 3], 6));
console.log(twoSumOptimal([3, 3], 6));