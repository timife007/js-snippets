const str = "Where are they, where did they go?";

//FInd index or position sensitive
printOut(str.indexOf("where"))

//find sensitive, i: insensitive
printOut(str.search(/where/i))

//slice a string
printOut(str.slice(4))

//slice reversed
printOut(str.slice(-9,-1))

//substring
printOut(str.substring(3))


//replace a string
const replacement = str.replace("Where", "What")
printOut(replacement)

//altered replacement
const altered = str.replace(/where/ig, "What")
printOut(altered)


//trim a string
const toBeTrimmed = " Timife is going to be great "
console.log(toBeTrimmed.trim())

//concat strings
const concatenated = str.concat(".", toBeTrimmed)
printOut(concatenated)


function printOut(a){
    console.log(a);
}
