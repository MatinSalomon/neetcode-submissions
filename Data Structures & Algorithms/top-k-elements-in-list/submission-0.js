class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let newNums = {}
        let res = []
        for(let num of nums){
            newNums[num] = newNums[num] || [];
            newNums[num].push(num);
        }   

        const numsOrdenados = Object.entries(newNums).sort((a, b) => b[1].length - a[1].length)

        for(let i=0;i<k;i++){
            res.push(parseInt(numsOrdenados[i][0]))
        }

        res.sort()
        return res
    }
}
