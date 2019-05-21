isPrime = (num) => {
    for(i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
let num = 2
let lNum = 0
while(num!=2000000){
    if(isPrime(num)){
        if(num>lNum){
            lNum = lNum+num
            console.log(lNum)
        }
    } num++
}
console.log(lNum)