class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArray = []
        let tArray = []
        let response = false

        for(let i=0; i<s.length; i++){
            sArray.push(s[i])
        }
        for(let i=0; i<t.length; i++){
            tArray.push(t[i])
        }
        sArray.sort()
        tArray.sort()
        if(sArray.join("") == tArray.join("")){
            response = true
        }
        return response
    }
}
