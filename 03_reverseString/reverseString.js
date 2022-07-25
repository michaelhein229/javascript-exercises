const reverseString = function(str) {
    /* RECURSIVE SOLUTION
    if (str === '') {
        return ''
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    } */

    // ITERATIVE SOLUTION
    let revStr = ''
    while (str) {
        revStr += str.slice(-1);
        str = str.substr(0, str.length - 1)
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
