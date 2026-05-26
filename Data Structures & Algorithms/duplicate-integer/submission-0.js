class Solution {
    
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isDuplicate = false
        let newNums = []
        for (let i = 0; i < nums.length; i++){
            console.log(nums[i])
            if (newNums.includes(nums[i])){
                isDuplicate = true
            } else{
                newNums.push(nums[i])
            }
        }
        console.log(newNums)
        return isDuplicate
    }
}
