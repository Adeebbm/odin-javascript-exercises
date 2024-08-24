const sumAll = function(num1,num2) {
    if(num1 < 1 || num2 < 1)return "ERROR";
    if(Math.floor(num1) != num1 || Math.floor(num2) != num2)return "ERROR";
    if((typeof num1 != 'number') || (typeof num2 != 'number')) return "ERROR";
    let res = 0;
    for(let i = Math.min(num1,num2);i < (Math.max(num1,num2)+1);i++){
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
