//kelvin meter
const kelvin = 0;
//celsius is similar to Kelvin but celsius is 273 while Kelvin is 293.
const celsius = kelvin - 273; 
//The code below convert kelvin to celsius
let fahrenheit = celsius * (9/5) + 32;
//Math.floor code below will round down the Fahrenheittemperature. save the result to fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//convert to Newton
let newton = celsius * (33 / 100);

//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)