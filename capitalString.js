let capitalize = (str) => {
    let cStr = str[0].toUpperCase()
    console.log(cStr)
    str.pop()
    return str
    
}

console.log(capitalize('hello'))