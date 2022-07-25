const repeatString = function(str, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }
    else if (numTimes === 0) {
        return '';
    } else {
        return str + repeatString(str, numTimes - 1);
    };
}

// Do not edit below this line
module.exports = repeatString;
