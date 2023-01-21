const generateNbonacciSequenceOfNMembers = function (count, base) {
    let result = [];
    result = setupBaseForNbonacciSequence(base, result);

    while (result.length < count) {
        let lastNElements = result.slice(result.length - base);
        let sumOfLastNElements = lastNElements.reduce((sum, element) => sum + element, 0);
        result.push(sumOfLastNElements);
    }

    return result;
}

const setupBaseForNbonacciSequence = function (base, arrayToModify) {
    addSomeZerosAtBeginning(base - 1, arrayToModify);
    arrayToModify.push(1);
    return arrayToModify;
}

const addSomeZerosAtBeginning = function (amount, arrayToModify) {
    let i = 0;
    for (i; i < amount; i++) arrayToModify.push(0);
    return arrayToModify;
}

module.exports = generateNbonacciSequenceOfNMembers;
module.exports.populateBase = setupBaseForNbonacciSequence;// only for tests