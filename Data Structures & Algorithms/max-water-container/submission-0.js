class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0

        for(let i=0; i<heights.length; i++){
            for(let j=i + 1; j<heights.length; j++){
                let container = 0
                const width = j - i
                let heigth = 0
                if(heights[i] < heights[j]){
                    heigth = heights[i]
                }else{
                    heigth = heights[j]
                }
                container = width * heigth

                if(res < container){
                    res = container
                }
            }
        }
        // console.log(res)
        return res 
    }
}
