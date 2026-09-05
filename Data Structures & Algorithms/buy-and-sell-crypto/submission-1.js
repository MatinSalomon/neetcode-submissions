class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maximum_profit = 0
        for(let i=0; i < prices.length; i++){
            for(let j= i + 1; j < prices.length; j++){
                let current_profit = prices[j] - prices[i]
                console.log(current_profit)
                if(current_profit > maximum_profit){
                    maximum_profit = current_profit
                }
            }
        }
        return maximum_profit
    }
}
