//tofixed method to indicate decimal places
const num = 21.12345
const num1 = (num).toFixed(1)
const num2 = (num).toFixed(2)

printOut(num1)
printOut(num2)

//toExponential, to convet to exp

const exp1 = (num).toExponential(1)
const exp2 = (num).toExponential(2)

printOut(exp1)
printOut(exp2)


//Check for invalid number
const checkNan = isNaN(num)
const checkInt = Number.isInteger(num)


printOut(checkNan)
printOut(checkInt)

function printOut(a){
    console.log(a);
}
