const repeatString = function (value, num) {
    if(num < 0){
        return "ERROR"
    }

    let finalValue="";
    for (let i = 0; i < num; i++) {
        finalValue += value
    }
    return finalValue
};

// Do not edit below this line
module.exports = repeatString;
