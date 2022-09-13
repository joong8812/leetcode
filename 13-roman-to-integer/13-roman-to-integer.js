/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const subRomans = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (i+1 < s.length) {
            const twoChars = s[i] + s[i+1];
            if (Object.keys(subRomans).includes(twoChars)) {
                sum += subRomans[twoChars]
                i++;
                continue;
            } 
        }
        sum += romans[s[i]]
    }
    return sum;
};