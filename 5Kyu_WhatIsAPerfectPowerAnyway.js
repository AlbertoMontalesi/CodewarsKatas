// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer.More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power.If it is a perfect power, return a pair m and k with mk = n as a proof.Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs.For example 81 = 3 ^ 4 = 9 ^ 2, so(3, 4) and(9, 2) are valid solutions.However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

//     Examples
// Test.describe("perfect powers", function () {
//     Test.it("should work for some examples", function () {
//         Test.assertSimilar(isPP(4), [2, 2], "4 = 2^2");
//         Test.assertSimilar(isPP(9), [3, 2], "9 = 3^2");
//         Test.assertEquals(isPP(5), null, "5 isn't a perfect number");
//     });
// });


const isPP = n => {
    // set initial points
    let current = 2
    let power = 2
    const max = Math.floor(n / 2)


    while (current <= max) {
        power = 2


        // continue increasing the power by 1 until that combination leads us to a number bigger than the original
        // in that case break the while and increase the current number, resetting the power to 2
        while (Math.pow(current, power) <= n) {
            // if current ** power gives us the number, return this combination of numbers
            if (n === Math.pow(current, power)) {
                return [current, power] ;
            } else {
                // else increase the power by 1 
                console.log(`current power and number are ${current} ${power} `);
                power++
            }
        }
        // when our combination of current and power returns us a number bigger than the result, we reet the power to two, increase the current number by one and try again all combinations
        current++
    }

    // if our current number reached our max value (half of the original number) there is no point in continuing calculating, the number is not a perfect power therefore return null
    return null
}
