class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
        let stringReverse = newS.split("").reverse().join("")

        if(newS == stringReverse){
            return true
        }
        return false
    }
}
