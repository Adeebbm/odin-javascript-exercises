const reverseString = function(s) {
    let res = '';
    for(let i = s.length - 1;i > -1;i--){
        res += s[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
