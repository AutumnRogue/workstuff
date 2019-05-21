let previous = 0;
let current = 1;
let sum = 0;
let next;
for(i=0;i<100;i++){
    next = current + previous
    previous = current
    current = next
    if(current%2==0 & current < 4000000){
        sum += current;
        console.log(sum)
    }
}