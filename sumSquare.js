let sumSquare =(maxNum)=>{
    finalN = 0
for(i=1;i<=maxNum;i++){
    let num = Math.pow(i,2)
    finalN = finalN + num
}return finalN
}

let squareSum =(maxNum)=>{
    finalN = 0
for(i=1;i<maxNum;i++){
    let num = i
    finalN = finalN + num
}return Math.pow(finalN,2)
}

let final =(maxNum)=>{
    sumSquare = sumSquare(maxNum)
    squareSum = squareSum(maxNum)
    return squareSum - sumSquare
}

console.log(final(10000000))

