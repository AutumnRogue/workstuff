
// let postCodeChecker1 = (input) => {
//     if(input[0].match(/[a-z]/)){
//         if(input[1].match(/[a-z]/)){
//             if(input[2].match(/[0-9]/)){
//                 if(input[3].match(/[0-9]/)){
//                     if(input[4].match(/[0-9]/)){
//                         if(input[5].match(/[a-z]/)){
//                             if(input[6].match(/[a-z]/)){
//                                 return true
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// let postCodeChecker2 = (input) => {
//     if(input[0].match(/[a-z]/)){
//         if(input[1].match(/[0-9]/)){
//             if(input[2].match(/[0-9]/)){
//                 if(input[3].match(/[0-9]/)){
//                     if(input[4].match(/[a-z]/)){
//                         if(input[5].match(/[a-z]/)){
//                             return true
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// let postCodeChecker3 = (input) => {
//     if(input[0].match(/[a-z]/)){
//         if(input[1].match(/[a-z]/)){
//             if(input[2].match(/[0-9]/)){
//                 if(input[3].match(/[0-9]/)){
//                     if(input[4].match(/[a-z]/)){
//                         if(input[5].match(/[a-z]/)){
//                             return true
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// let postCodeChecker4 = (input) => {
//     if(input[0].match(/[a-z]/)){
//         if(input[1].match(/[0-9]/)){
//             if(input[2].match(/[0-9]/)){
//                 if(input[3].match(/[a-z]/)){
//                     if(input[4].match(/[a-z]/)){
//                         return true
//                     }
//                 }
//             }
//         }
//     }
// }


// let input = '189327f'

// let finalChecker = () => {
//     if(postCodeChecker1(input) == true){
//         return (`${input} is a viable code!`)
//     } else if(postCodeChecker2(input) == true){
//         return (`${input} is a viable code!`)
//     } else if(postCodeChecker3(input) == true){
//         return (`${input} is a viable code!`)
//     } else if(postCodeChecker4(input) == true){
//         return (`${input} is a viable code!`)
//     } else {
//         return (`${input} is not a viable code!`)
//     }
// }


// console.log(finalChecker())

// 0 1 2 3 4 5 6
// L L N N N L L
// L N N N L L
// L N N L L
// L L N N L L






let postcodeChecker=(postcode)=>{
    let regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

console.log(postcodeChecker('nr304de'))
