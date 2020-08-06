/* These commented lines will give an error
    because you can't change the type of the variable
    after it is declared
let num: number;
num: 22;
num = "free";
*/

// You can use instead the type any if you wanna change
// the value of the variable later
let userData: any;
userData = 22;
console.log(userData + 2); // 24
userData = "free";
console.log(userData + "man"); // freeman