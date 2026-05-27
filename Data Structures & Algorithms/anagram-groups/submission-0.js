class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let response = []

        for(let str of strs){
            const sortedS = str.split('').sort().join('');
            if (!response[sortedS]) {
                response[sortedS] = [];
            }
            response[sortedS].push(str);
        }

        console.log(Object.values(response))
        return Object.values(response)
    }
}
