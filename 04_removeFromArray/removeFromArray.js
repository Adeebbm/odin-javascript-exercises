const removeFromArray = function(arr, ...nums) {
    let res = [];
    for(let i = 0;i < arr.length;i++){
        if(nums.includes(arr[i]))continue;
        res.push(arr[i]);
    }
    return res;
    
};

// Do not edit below this line
module.exports = removeFromArray;
