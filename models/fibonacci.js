const generateFibonacciSequenceOfNMembers = function (n) {
    let result = [0, 1];
    while (result.length < n) {
        let indexOfLast = result.length - 1;
        let indexOfPreLast = result.length - 2;
        result.push(result[indexOfLast] + result[indexOfPreLast]);
    }
    return result
}

module.exports = generateFibonacciSequenceOfNMembers