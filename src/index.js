exports.min = function min(array) {
    if (arguments.length === 0) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    if (arguments.length === 0) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    if (arguments.length === 0) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else {
        return (
            array.reduce(function (sum, curr) {
                return sum + curr;
            }) / array.length
        );
    }
};
