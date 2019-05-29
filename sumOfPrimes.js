let finalN = 0

isPrime = (num) => {
    for(i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
    }

sumPrime = (num) => {
for(j=0;j<num;j++){
    if(isPrime(j)){
        finalN += j
        console.log(finalN)
    }
}
}

console.log(sumPrime(2000000))
