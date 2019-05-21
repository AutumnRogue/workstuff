let balance = 7651
//////////////



let cardIn = false
let pinN = 0
let withdrawAmount = 0


console.log('Enter Card')


switch(cardIn){
    case true:
    console.log('Enter Pin')
}

switch(pinN) {
    case 1234:
    if(cardIn) {
    console.log(balance + 'pounds, how much would you like to withdraw?')
}
}
if((balance > withdrawAmount) && ( withdrawAmount> 0)) {
    console.log(`Heres £${withdrawAmount}pounds, have a lovely day`)
} else if(balance < withdrawAmount) {
    console.log('Insufficient funds')
}

/*
let accountBalance = 4233
let withdrawAmount = 123

const withdraw = () => {
    if(accountBalance>withdrawAmount) {
        console.log(`Heres £${withdrawAmount}pounds, have a nice day`)
    } else {
        console.log('Insufficient funds')
    }
}
withdraw()

*/