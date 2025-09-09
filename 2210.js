/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    let newNums = nums.reduce((acc, num, index, self) => {
        if(num !== self[index + 1]) {
            acc.push(num);
        }
        return acc;
    }, []);
    console.log("🚀 ~ countHillValley ~ newNums:", newNums)
    for (let i = 1; i < newNums.length - 1; i++) {
        let index = i;
        let leftIndex = i - 1;
        let rightIndex = i + 1;
        let left = newNums[leftIndex];
        let right = newNums[rightIndex];
        let current = newNums[index];


        while(current === left && leftIndex > 0) {
            left = newNums[leftIndex - 1];
            leftIndex--;
        }

        while(current === right && rightIndex < newNums.length - 1) {
            right = newNums[rightIndex + 1];
            rightIndex++;
        }

        if (current > left && current > right ) {
            count++
        } else if (current < left && current < right ) {
            count++
        }
    }
    return count
};

console.log(countHillValley([5,7,7,7,1,7]))