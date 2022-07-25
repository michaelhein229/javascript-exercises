const sumAll = function(startNum, endNum) {
    if (startNum < 0 || endNum < 0) {
        return "ERROR"
    } else if (typeof startNum != 'number' || typeof endNum != 'number') {
        return "ERROR"
    } else {
        let start = Math.min(startNum,endNum);
        let end = Math.max(startNum, endNum);
        sum = 0;
        for (i = start; i <= end; i ++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
