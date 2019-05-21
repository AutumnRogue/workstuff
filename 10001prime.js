isPrime = (num) => {
    for(i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
let counter = 0
let number = 2

while(counter != 10001){
    if(isPrime(number)){
        counter++
        number++
    } else {
        number++
    }
}
console.log(number)