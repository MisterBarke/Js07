module.exports = factorial

function factorial(n){
    let x = 1;
    for(let i =2; i<=n; i++){
        x*=i;
    }
    return x
}
console.log(factorial(4));