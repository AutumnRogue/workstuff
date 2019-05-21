/*
let password = 'password'
if (password.length > 7) {
    console.log(password)
} else {
    console.log(false)
} 

let num = 11
if (num%3 == 0 || num%5 == 0) {
    console.log(true)
} else {
    console.log(false)
}

let num = 10;

if (num%3 == 0 && num%5 == 0) {
    console.log('fizz')
} else if (num%5 == 0) {
    console.log('buzz')
     } else if ( num%3 == 0) {
    console.log('something')
     } else {
         console.log(num)
} 
 
let num = '1001'
function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
} 
rNum = reverseString('1001')

if (rNum == num){
    console.log (true)
} else {
    console.log (false)
}


let num = 1002
let rNum = num.toString().split("").reverse().join("");
let reverseN = Number(rNum)
if(num == rNum) {
    console.log(true)
} else {
    console.log(false)
}

let time = 20
let placeOfWork = 'CodeNation'
let townOfHome = 'Manchester'

if(time <7) {
    console.log('I am Asleep in ',townOfHome)
} else if (time < 17) {
    console.log('I am working at ',placeOfWork)
} else if (time < 24) {
    console.log('I am chilling at ',townOfHome)
} else {
    console.log('Invalid Time')
}

//let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let string = 'jdhesi'
let a = string.lastIndexOf('a');
let e = string.lastIndexOf('e');
let i = string.lastIndexOf('i');
let o = string.lastIndexOf('o');
let u = string.lastIndexOf('u');

let lString = string.length +1
while ( lString > 0) {
    if(lString == a) {
        console.log(a)
        break;
    }
    if(lString == e) {
        console.log(e)
        break;
    }
    if(lString == i) {
        console.log(i)
        break;
    }
    if(lString == o) {
        console.log(o)
        break;
    }
    if(lString == u) {
        console.log(u)
        break;
    } else lString--


    
}

let string = 'benilhgdfhdshgiaigggggiggg'
let lString = string.length // 26
while (lString > 0) {
    let c=string[lString]   //25
    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') {
        console.log(lString+1)
        break;
    }
   lString--
}



let word = 'boob'
let wordL = word.length
let word1 = word.charAt(wordL-1)
let word2 = word.charAt(0)
if (word1 == word2) {
    console.log(true)
} else {
    console.log(false)
}

Challenge 9:
Create two variables called num1 and num2.
Create an if statement that checks if the result of the
sum is even. If it is return the number, otherwise return
the numbers multiplied together.
 

 let num1 = 8
 let num2 = 6
 let num3 = num1+num2
 if(num3%2 == 0){
     console.log(num3)
 } else {
     console.log(num1*num2)
 }
 */

//  let chlg = {
//      array:[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]],
//      check(pos,pos2){
//          return this.array[pos][pos2]
//      },
//  };
// console.log(chlg.check(1,2))

// let sort = (str) => {
//     return str.split('').sort().join('')
// }

// let str = 'qqijj'
// let strN = str.split('').sort().join('')

// let evenOrOdd = () => {
//     if(strN.length%2 == 1){
//         let strN = strN.substring(0, str.length - 1)
//     }
// }



// str.substring(0, str.length - 1)

// let strCheck = (str) => {
//     if(str.length%2 == 1){
//         let strO = (str) => {str.split('').sort().join('')
//     }
// }
//     let strE = (str) => {str.split('').sort().join('')
//     }
// }

// let palaE = () => {
//     for(i=0;i<str.length;i+=2){
//         if(str.length%2 == 0)
//             if(strE[i]==strN[i+1]){
//                 return true
//             }
//             }
//         }

// console.log(strO('aaiic'))


// let palacheck = {
//     str: 'aaiiyuddyy',
//     sort(str) {
//         return this.str.split('').sort().join('')
//         },
//     oddToEven(){
//         if(this.str.length%2 == 1){
//         for(i=0;i<this.str.length;i++){
//             if(this.str[i] != this.str[i+1]){
//                 this.str.replace(i,'')
//                 return true
//             }
//         }
//     }
//     },
//     pala() {
//         for(i=0;i<this.str.length;i+=2){
//             if(this.str[i] = this.str[i+1]){
//                 return true
//             } else {
//                 return false
//             }
//         }
//     },
//     }

//     console.log(palacheck.oddToEven())
//     console.log(palacheck.pala())



// let pala = ''
// let arr = [['123'],['00'],['101']]
// let arrN = arr.toString()
// let arr0 = arr[0].split().reverse()
// let arr1 = arr[1].reverse()
// let arr2 = arr[2].reverse()
// check = () => {
//         arr0 == arr[0] ? true : false             
//         // arr1 == arr[1] ? true : false
//         // arr2 == arr[2] ? true : false 
//     }
// console.log(arr0)


//  anaPala = (str) => {
//     let word = {}

//     for(i=0;i<str.length;i++){
//         if(word[str[i]]){
//             word[str[i]] ++
//         } else{
//             word[str[i]] = 1
//         }
//     }
//     return word
// }

// oddCounter = (aStr) => {
//     let letters = anaPala(aStr)
//     let odds = 0
//     for(j in letters){
//         if(letters[j]%2 != 0){
//             odds ++;
//         }
//     } return odds
// }

// trueOrFalse = (myStr) => {
//     let odds = oddCounter(myStr)
//     if(myStr.length%2 != 0 && odds == 1){
//         return true
//     }
//     if(myStr.length%2 == 0 && odds == 0){
//         return true
//     }
//     return false
// }

// console.log(trueOrFalse('yyffhhggooyyj'))

// let numbers =() => {
//     bigPal = 0
//     for (i=100; i<1000; i++) {
//         for (j=100; j<1000; j++) {
//             let nNum = (i*j)
//         if(nNum == nNum.toString().split("").reverse().join("")){
//             if( nNum > bigPal) {
//                 console.log(bigPal = nNum)
//                 }
//             }
//         }
//     }
// }

// numbers()

// for(number=999;number>99;number--){
//     let num = 0
//     let maxpal = 0
//     let maxNum = 0
//     while(num<=number){
//         let nNum = (num*number)
//         if(nNum == nNum.toString().split("").reverse().join("")){
//             if(nNum > maxNum) {
//                 maxPal = nNum
//             }
//             console.log(nNum)
//         }
//         num++
//         }
//     }


// numbers()

// let numbers =() => {
//     let num = 90
//     let numb = []
//     while(num<=99){
//         let nNum = (num*99)
//         numb.push(nNum)
//         num++
//     }
//     return numb
// }
// console.log(numbers())

// let pala =()=>{
//     numb = numbers()
//     for(i=0;i<10;i++){
//         if(numb[i] = numb[i].toString().split('').reverse().join('')){
//             console.log(numb)
//         }
//     }
// }

// pala()

// let myArray = ['Sam','Stu','Dean','Andy','Dan']
// console.log(myArray.sort())












 

