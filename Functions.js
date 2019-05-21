/*
const sayHi = () => {
    console.log("Hiya")
}
sayHi()


const cashWithdrawal = (amount,accnum) => {
    console.log(`Withdrawing ${amount} from account number ${accnum}`)
}

cashWithdrawal(300,987428374)



const coffee = (size,type) => {
    console.log(` Hi, I would like a ${size} ${type} coffee please`)
}
coffee('small','black')


const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(170));


const sandwich = (top1,top2,top3,top4,top5) => {
    console.log(`Were preparing your ${top1},${top2},${top3},${top4} and ${top5} sandwich, please be patient.`)
}
sandwich('pb','pb','pb','pb','jam')



const thingsThatArentGoingToHappen = ['fetch','adam getting laid this friday','dylan/adam getting this joke']
thingsThatArentGoingToHappen.unshift('duce')
console.log(thingsThatArentGoingToHappen)



 for (i=0; i<6; i++) {
    console.log(Math.round(Math.random() * 50 + 1))
 }
 

 for (i=9; i>-1; i--)
 console.log(i)

 

const drinks = ['rum','more rum','yes,more rum','tret','terter','tertr','yert','yert']
for(iDrinks = 0;iDrinks<drinks.length;iDrinks++){
    console.log(drinks[iDrinks])
}



Create an array that lists your favourite films, up to 5
elements
Add 2 more using a method
Use a loop to cycle through the array
for ( let filmIndex = 0 ….)


const fFilms = ['Avatar','Star Wars','Harry Potter','thing','stuff']
fFilms.splice(0,0,'extra1','extra2')
for(iFilms = 0; iFilms < fFilms.length; iFilms++ )
 console.log(fFilms[iFilms])

 

 let cards = ['Hearts','Diamonds','Clubs','Spades']
let currentCard = 'Spades';
while(currentCard !='Spades') {
    currentCard=cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);



let fFilms = ['one','two','Ghostbusters','three']
for(iFilms = 0; iFilms < fFilms.length; iFilms++)
console.log(fFilms[iFilms]);

const filmcheck = (filmNumber) => {
    if(filmNumber ==3) {
        console.log('yay ghostbusters');
    } else {
        console.log('boo no ghostbusters')
    }
}
filmcheck(2)



const gamer = (marioKart,Nintendo) => {
    if( marioKart && Nintendo) {
        console.log(`Lets play sometime!`)
    } else {
        console.log(`you're missing out!`)
    }
}
gamer(true,true)



let person = {
    name: 'Luke',
    age: 25,
    hair: false,
    sayHi() {
        console.log(`hello, my name is ${this.name}`)
    }
}
//console.log(person.name)
//console.log(person['name'])
person.sayHi()

*/

let rabbit = {
    name:'Sherlock',
    colour:'black and white',
    ears:'uppy',
    bunHop() {
        console.log(`hopping`)
    },
    bunChew() {
        console.log(`chewing`)
    }
}
rabbit.bunChew()
rabbit.bunHop()








