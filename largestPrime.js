// let number = 600851
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


let number = 60085147514332
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
