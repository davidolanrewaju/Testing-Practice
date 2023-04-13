function stringLength(string) {
    if (string.length > 10 ) {
        return('Character exceeds 10');
    }
    else if (string.length < 11) {
        return(string.length);
    }
}

stringLength('disambigution');

module.exports = stringLength;