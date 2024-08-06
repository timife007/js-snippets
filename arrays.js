let check = ["timife", "ifeoluwa"];

let set = "timife,ifeoluwa,ademola"
let counts = [1,2,3,4,5,6]

/**
 * Split string into arrays
 */
let toBeSplitted = "1,2,3,4,5,6,7"

let stringToArray = toBeSplitted.split(",")
let intArray = [];

/**
 * Convert strings to ints by parsing
 */
stringToArray.forEach(function(x,y,z){
    intArray.push(parseInt(x));
})
console.log(
    stringToArray
)
console.log(
    intArray
)



/**
 * Mapping of arrays
 */
const doubles = counts.map(function(x,y,z){
    if(x % 2 == 1){
        return x * 4;
    }else{
        return x;
    }
})

/**
 * Iterate for-each
 */
counts.forEach(manipulator)

/**
 * Extract out the comparisonFunc
 */
function manipulator(value,index,arr){
    console.log(value * 2)
}

/**
 * Filter logic
 */
let items = [1,2,3,4,5,6,7]

const filtered = items.filter(filterCondition)

function filterCondition(value, idx, arr){
    return value % 2 == 1;
}

/**
 * 
 */
console.log(filtered)