let wordList = ['test','hello','something','thing','tasty','fat']

let regex = /[a-z]/i

let isAWord= (str) => {
    for(i=0;i<str.length;i++){
        if(regex.test(str[i]) != true){
            return false
        }
    } return str.toLowerCase()
}

let anagram=(str)=>{
    for(j=0;j<wordList.length;j++){
        if(isAWord(str)){
        let word = isAWord(str).split('').sort().join('')
        let nWord = wordList[j].split('').sort().join('')
        if(word == nWord){
            return true
        }
    } else {
        return false
    }
} return false
}


console.log(anagram('llehO'))