// let num = 1000
// while( num > 0 && num <= 1000) {
//     if(num%5 == 0 || num%3 == 0 ) {
//     console.log(num)
//     }
//  num--
// }

// for (i = 0; i <= 1000; i++) {
//     if (i%5 == 0 || i%3 == 0)
//     console.log(i)}
    

// let today = new Date();
// let cmas = new Date(today.getFullYear(), 11, 25);
// let oneDay = 1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(oneDay))+ " days left until christmas!");

// let object = {
//     name: "luke",
//     age: 25,
//     sex: "male",
// }
// object.newProp = "yes"

// console.log(object)

let thisFunction = (str)=>{
    let nStr = str.split('').reverse().join('')
    return nStr
}

console.log(thisFunction('hello'))