class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets = []
        let respetidos = new Set()
        for(let i=0; i<nums.length; i++){

            for(let j= i + 1; j<nums.length; j++){

                for(let k= j + 1; k<nums.length; k++){

                    if((nums[i] + nums[j] + nums[k]) == 0){
                        let existe = [nums[i], nums[j], nums[k]].sort().join("")
                        if(!respetidos.has(existe)){
                            triplets.push([nums[i], nums[j], nums[k]])  
                        }
                        respetidos.add(existe)
                    }
                }
            }
        }
        return(triplets)
    }
}
