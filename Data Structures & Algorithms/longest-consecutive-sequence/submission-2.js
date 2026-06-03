class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const nums_sort =[...new Set(nums.sort((a,b) => a - b))]
        let longest = 0

        // console.log(nums_sort)
        let prevNum = nums_sort[0]
        let sequence = 0
        for(let i = 0; i<nums_sort.length; i++){
            // console.log(prevNum + 1)
            // console.log(nums_sort[i])
            if((prevNum + 1) == nums_sort[i]){
                sequence++
                // console.log("sequence", sequence)
                
            }else{
                sequence = 0
            }

            if (longest < sequence){
                longest = sequence
            }

            prevNum = nums_sort[i]
        }
        // console.log(longest + 1)
        if(nums.length == 0){
            return 0
        }else{
            return longest + 1
        }
    }
}
