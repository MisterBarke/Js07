function celsiusToFahrenheit(C){
    let result = C*1.8+32
    return result
}
let Fahrenheit = celsiusToFahrenheit(30);
console.log(Fahrenheit);

module.exports = celsiusToFahrenheit