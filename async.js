waitASecond = (num) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(num > 5){
                resolve('resolved')
            }else if(num < 5){
             reject('rejected')
            }
        },1000);
    });
}

async function process() {
    let status = await waitASecond(6);
    console.log(status);
}

console.log(process())
