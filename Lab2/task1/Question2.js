//rest operator (...)

function calculateTotal(...args){
    let res=0
    for(let i=0;i<args.length;i++){
        res+=args[i]
    }
    return res
}

console.log(calculateTotal(10, 20, 30, 40))