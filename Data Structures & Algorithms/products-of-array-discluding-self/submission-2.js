class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []
        for(let i=0; i<nums.length; i++){
            let num = 1
            for(let j=0; j<nums.length; j++){
                if(j != i){
                    num = num * nums[j]
                }else{
                    continue
                }
            }
            res.push(num)
        }
        return res
    }
}
