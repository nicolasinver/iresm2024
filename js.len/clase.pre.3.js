const getName = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('nico')
            
        }, 1500);
    })
}
const sayHello = async() => {
    const name = await getName()
    return `hello ${name}`
}

sayHello().then(res=>console.log(res))

