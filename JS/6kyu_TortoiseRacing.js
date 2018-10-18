// Two tortoises named A and B must run a race.A starts with an average speed of 720 feet per hour.Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1(A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g(integer > 0) how long will it take B to catch A ?

//   The result will be an array[hour, min, sec] which is the time needed in hours, minutes and seconds(don't worry for fractions of second).

// If v1 >= v2 then return nil, nothing, null, None or { -1, -1, -1 } for C++ , C, Go, Nim, [] for Kotlin.
//   Examples

// race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37)   => [3, 21, 49]

// Note: you can see some other examples in "Your test cases".

function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }

  var res = Math.floor(3600 * g / (v2 - v1));
  // divide by 3600 and round down to find how many hours
  // divide by 60 to get the total minutes and use the remainder by 60 to only find the actual minutes(120%60
  // would give 0, because 120 mins is 2 hours and 0 minutes)
  // modulo 60 to find seconds, as our res indicates the seconds already
  return [Math.floor(res / 3600), Math.floor(res / 60) % 60, res % 60];

}