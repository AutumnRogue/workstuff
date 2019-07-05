let anagram=(str)=>{
    for(j=0;j<wordList.length;j++){
        if(isAWord(str)){
        let word = isAWord(str).split('').sort().join('')
        let nWord = wordList[j].split('').sort().join('')
        if(word == nWord){
            return true // str
        }
    } else {
        return false
    }
} return false
}