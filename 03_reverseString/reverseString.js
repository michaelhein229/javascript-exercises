const reverseString = function(str) {
    if (str === '') {
        return ''
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
};

// Do not edit below this line
module.exports = reverseString;
