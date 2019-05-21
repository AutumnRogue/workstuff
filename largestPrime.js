// let number = 600851475143
// let largestNumber = 0
// let primes = [2]


// isPrime = (num) => {
// for(i=71;i<num;i+=2){
//     if(num%i==0){
//         return false
//     }
// }
// return true
// }

// primeFinder = () => {
//     for(l=smallestPrime();l<number/2;l+=2){
//         if(isPrime(l)){
//             // console.log(l)
//             primes.push(l)
//         }
//     }
// }

// smallestPrime = () => {
//     for(k=2;k<number;k++){
//         if(number%k==0){
//             if(isPrime(k)){
//                 return k
//             }
//         }
//     }
// }
// primeFinder()
// console.log(primes)


// largestPrime = () => {
//     for(h=number;h>0;h-=smallestPrime()){
//         console.log(h)
//         if(number%h==0){
//             if(isPrime(h)){
//                 return h
//             }
//         }
//     }
// }


// for(j=3;j<number/smallestPrime();j+=smallestPrime()){
//     if(number%j==0){
//         if(isPrime(j)){
//             console.log(j)
//             if(j>largestNumber){
//                 largestNumber = 0 + j
//             }
//         }
//     }
// }
// console.log(largestNumber)


///////////////////////

// for (j=2; j<num/2; j++){
//     does my number divide by j?
//     If yes (num=num/j, and check if num divides by j again)
//     Append my prime factors to an array
// }


// create array of prime numbers
// primes = [2]
// for (i=3; i<num/2;i+=2) {
//     for number in arrayOfPrimes:
//         if i % number == 0:
//             isn't 
// }
//  i%primes[j]


let number = 600851475143
let divider = 2
let smallestFactor;

largestPrime = () => {
    while(number !=1){
    if(number%divider==0){
        smallestFactor = divider
        number = number/divider
        divider = 2
    } else {
        divider++
    }
}
}

largestPrime()
console.log(smallestFactor)
