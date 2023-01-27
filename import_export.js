//import and export

var capitalizeString = require("./string_function.js");
const cap = capitalizeString("hello!");

console.log(cap);



const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

console.log(foo);

// import everything
import * as capitalizaString from "capitaliz_string";

import substract from "math_functions";

subtract(7,4);