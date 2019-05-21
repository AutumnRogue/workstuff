// for(i=10000000;i<=1000000000;i++){
//     if(i%5 == 0 && i%7 == 0 && i%9 == 0 && i%11 == 0 && i%13 == 0 && i%16 == 0 && i%17 == 0 && i%19 == 0){
//         console.log(i)
//     }
// }

// let number = 100
// let equation = false
// let counter = 18
// while(equation!= true){
//     console.log(number)
//     for(i=2;i<20;i++){
//         if(number%i==0){
//             counter --
//         }
//     }  number++
//     if (counter == 0){
//         console.log(number)
//         equation = true
//     }
// }


// for(i=10000000;i<100000000;i+=20){
//     let multiple = true
//     for(j=2; j<20;j++){
//         if(i%j != 0){
//             multiple = false
//         }
//     } if(multiple== true){
//         console.log(i)
//     }
// }


let lowest = 2
for(i=2;i<=20;i++){
    let sum = lowest
    while(sum%i != 0){
        sum += lowest
    }
    lowest = sum
}
console.log(lowest)


