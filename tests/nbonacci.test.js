const nbonacci = require("../models/nbonnaci.js");

describe("N-bonacci handles correctly", () => {

    test.each([
        [2, [0, 1]],
        [4, [0, 0, 0, 1]],
        [6, [0, 0, 0, 0, 0, 1]],
    ])
    (`creation of base for N = %i`,  (n, base) => {
        expect(nbonacci.populateBase(n, [])).toEqual(base)
    });


    test("generating tribonacci sequence with 25 elements", () => {
       let count = 25;
       let sequence = nbonacci(3, count);
       expect(sequence).toHaveLength(count);
       expect(sequence).toEqual([
           0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274,
           504, 927, 1705, 3136, 5768, 10609, 19513, 35890,
           66012, 121415, 223317, 410744
       ]);
    });

    test("generating 4-bonacci sequence with 35 elements", () => {
        let count = 35;
        let sequence = nbonacci(4, count);
        expect(sequence).toHaveLength(count);
        expect(sequence).toEqual([
            0, 0, 0, 1, 1, 2, 4, 8, 15, 29, 56, 108, 208,
            401, 773, 1490, 2872, 5536, 10671, 20569,
            39648, 76424, 147312, 283953, 547337, 1055026,
            2033628, 3919944, 7555935, 14564533, 28074040,
            54114452, 104308960, 201061985, 387559437
        ]);
    });
});