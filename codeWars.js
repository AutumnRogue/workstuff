// function isIsogram(str){
//     let strL = str.length
//     for(i = 0; i < strL; i++){
//     let c = str[strL]
//     if(c==str[i]) {
//     return true
//   }
// }
//   strL--
// }

  
  
// function isIsogram(str){
//   // let counter = 0
//   let strL = str.length
//   let myLetters = ['0']
//   for(i = 0; i < strL; i++){
//   if(str[strL] == str[i]){
//     myLetters.push(str[i])
//   }
//   if(str.indexOf(myLetters)){
//     return false
//   } else {
//     return true
//   }
//   } 
//   strL--
  
// // counter++

// }
// console.log(isIsogram('dea'))
// // console.log(myLetters)

// isIsogram('Dean')

// let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);
// console.log(isIsogram('dean'))

// function isIsogram(str){
//   return str.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
//  }

// console.log(isIsogram('Deane'))
// let isIsogram = (str) => {
//   str.split("").every((c,i).indexOf(c) == i)
// }

// console.log(isIsogram('Deane'))

// function disemvowel(word) {
//   for(i=0;i<word.length;i++) {
//     let c=word[i]
//   if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u') {
//    return word.split(c).join('')
//   }
//  }
// }
// console.log(disemvowel('yasdoi'))

// let disemvowel = (word) => {
//   while( 0 < word.length) {
//     let word1 = word.split('i').join('')
//     let word2 = word1.split('e').join('')
//     let word3 = word2.split('o').join('')
//     let word4 = word3.split('u').join('')
//     let word5 = word4.split('a').join('')
//     return word5
//   }
//   word.length--
// }

//  console.log(disemvowel('asdoi'))

// let vowels = ['a','e','i','o','u']
// let disemvowel = (word) => {
//   for(i=0;i<5;i++){
//     let word1 = word.toString("").split(vowels[i]).join('')
//     return word1
//   }
//   word.length--
// }

// console.log(disemvowel('asdoi'))


// let word = 'asdoiauoi'
// console.log(word.split('a').join(''))