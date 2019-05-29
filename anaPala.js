anaPala = (str) => {
    let word = {}

    for(i=0;i<str.length;i++){
        if(word[str[i]]){
            word[str[i]] ++
        } else{
            word[str[i]] = 1
        }
    }
    return word
}

oddCounter = (aStr) => {
    let letters = anaPala(aStr)
    let odds = 0
    for(j in letters){
        if(letters[j]%2 != 0){
            odds ++;
        }
    } return odds
}

trueOrFalse = (myStr) => {
    let odds = oddCounter(myStr)
    if(myStr.length%2 != 0 && odds == 1){
        return true
    }
    if(myStr.length%2 == 0 && odds == 0){
        return true
    }
    return false
}

console.log(trueOrFalse('iidduuffooggjjh'))