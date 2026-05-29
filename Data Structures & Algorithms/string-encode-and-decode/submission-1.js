class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let stringEncoded = ''
        for(const str of strs){
            const strSize = str.length
            stringEncoded = stringEncoded + strSize + '#' + str
        }
        return stringEncoded
    }
    decode(str) {
        let res = [];
        let i = 0; 

        while (i < str.length) {
            let j = str.indexOf('#', i);
            
            let length = parseInt(str.substring(i, j));
            
            let strDecoded = str.substring(j + 1, j + 1 + length);
            res.push(strDecoded);
            
            i = j + 1 + length;
        }
        return res
    }
}
