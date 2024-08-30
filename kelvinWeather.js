const kelvin = 293;
// the forecast today 
const celsius = kelvin - 273;
// Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9/5) + 32;
// equation to calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);
// Math object to raund down
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);