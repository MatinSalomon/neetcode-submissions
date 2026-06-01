class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res: number[] = []
        for(let i: number =0; i<nums.length; i++){
            let num: number = 1
            for(let j: number =0; j<nums.length; j++){
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
