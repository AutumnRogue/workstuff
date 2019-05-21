factorial = (num) => {
let nNum = 1
    while( num != 1){
        nNum *= num
        num--
    } return nNum
}

let str = factorial(20).toString().split('')

sum = (str) => {
    let sNum = 0
    for(i=0;i<str.length;i++){
        sNum += Number(str[i])
    }return sNum
}

console.log(sum(str))

