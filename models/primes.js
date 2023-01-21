 const generateFirstNPrimeNumbers = function (n) {
    let result = [2, ];
    let i = 3;
    while (result.length < n) {
        let isPrime;
        for (let j = 2; j < i; j+=1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
            isPrime = true;
        }
        if (isPrime) result.push(i);
        i += 1;
    }
    return result;
}

module.exports = generateFirstNPrimeNumbers;

generateFirstNPrimeNumbers(10);