/*
class Bunny{
    constructor(name){
    this._name = name;
    this._hops =
    0;
     }
    get name(){
    return this._name;
     }
    get hops(){
    return this._hops;
     }
    increaseHops(){
    this._hops++;
     }
    }
    const rosie = new Bunny('Rosie');
    const lizzie = new Bunny('Lizzie');



class cars {
  constructor(reg, time) {
    this._reg = reg;
    this._time = time;
  }
  get reg() {
    return this._reg;
  }
  get time() {
    return this._time;
  }
  charge() {
    return `blabla your car ${this.reg} costs £${this.time * 1.5}`;
  }
}
class staff extends cars {
  constructor(reg, time, company) {
    super(reg, time);

    this._company = company;
  }
  get staffid() {
    return this.staffid;
  }
  get company() {
    return this._company;
  }
  charge() {
    if (this.company == "emis") {
      return `blabla your car ${this.reg} from emis costs £${this.time * 0.75}`;
    } else if (this.company == "codenation") {
      return `blabla your car ${this.reg} from codenation costs £${this.time}`;
    } else {
        return (`blabla your car ${this.reg} as a guest costs £${this.time * 1.2}`)
    }
  }
}
const carly = new staff("1234",5,'emis');
const jim = new cars("4321",5);
//const car1 = new cars('1234',5);
//const car2 = new cars('9876',102)
console.log(carly.charge());

/*

class tamagotchi {
  constructor(race) {
  this._race = race;
  this._happiness = 100;
  this._thirst = 100;
  this._hunger = 100;
}
get race(){
  return this._race;
}
get happiness(){
  return this._happiness;
}
get hunger(){
  return this._hunger;
}
get thirst(){
  return this._thirst;  
}
feed(){
  this._hunger++;
  return this._hunger;
}
drink(){
  this._thirst++;
  return this._thirst;
}
play(){
  this._happiness++;
  this._hunger--;
  this._thirst--;
  return [this._happiness, this._hunger, this._thirst];
}
dontPlay(){
  this._happiness--;
}
}

const timmy = new tamagotchi('dog')

console.log(timmy.play())



const priceOfFlower = 0.62; // pence
let numberOfFlowers = 12;

if((((priceOfFlower * numberOfFlowers)*100)/100) == 7.44) { 
	console.log("making transaction");
} else {
	console.log("transaction failed");
}

*/

// let array = [1, 2, 3];
// for (let num of array) {
//   array.push(num+1);
//   array.push(num+2);
//   array.push(num+3);
//   console.log(array);
//  break;
// }

let array = [1, 2, 3];

for (let num of array) {
  array.push(num + 1);
  console.log(num);
  if (array[8]) {
    break;
  }
}
