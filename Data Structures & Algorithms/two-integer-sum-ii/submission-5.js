class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        
        for(let i=0; i<numbers.length; i++){
            let sum = numbers[i]
            let res = [i + 1]
            for(let j=0; j<numbers.length; j++){
                if(numbers[i] != numbers[j]){
                    if((numbers[j] + numbers[i])  == target){
                    res.push(j + 1)
                    let newRes = res.sort()
                    return newRes
                    }
                }else{
                    continue
                }
            }
            
        }
    }
}
