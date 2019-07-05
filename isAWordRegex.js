let isAWord= (str) => {
    for(i=0;i<str.length;i++){
        if(regex.test(str[i]) != true){
            return false
        }
    } return str.toLowerCase()
}