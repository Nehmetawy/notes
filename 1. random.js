/*

## random()

    a random number generator
    https://p5js.org/reference/p5/random

note : generates a floating number
    its pseudo-random
    => not completely random , uses a function to simulate randomness

*/

/*
`````````````````````````````````````````````````
`                                               `
`   Direction To Randomness
`                                               `
`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
*/
const array = [1, 1, 2, 3, 4];
/*
    use random(0,5)
    get from array
    result : 1 has 40% chance of selection, rest has 20%
*/

/*
`````````````````````````````````````````````````
`                                               `
`   Normal/gaussian distribution
`                                               `
`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
link : https://en.wikipedia.org/wiki/Normal_distribution
*/
randomGaussion();
// gives values as per above normal distribution

/*
`````````````````````````````````````````````````
`                                               `
`  Perlin Noice
`                                               `
`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
random number generated has some relation to the previous random number generated
*/
noise(); // gives perlin noice
