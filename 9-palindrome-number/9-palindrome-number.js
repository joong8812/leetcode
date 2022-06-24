/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringX = String(x);
    for (let i = 0; i < parseInt(stringX.length / 2); i++) {
        if (stringX[i] !== stringX[(stringX.length-1) - i]) return false;
    }
    return true;
};