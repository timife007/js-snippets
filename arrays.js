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
 * Join array into string
 */
let joinedArrToString = stringToArray.join("")
console.log(joinedArrToString)



/**
 * Mapping of arrays
 */
const doubles = counts.map(function(value,index,arr){
    if(value % 2 == 1){
        return value * 4;
    }else{
        return value;
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

console.log(filtered)


/**
 * Merge Arrays
 */
let array1 = ['x','y','z']
let array2 = ['a','b','c']

let comboArray = array1.concat(array2)
console.log(comboArray)


/**
 * searching for an element
 */

const cities = ["Madrid", "Berlin", "London", "Berlin"]

const isCityPresent = cities.includes("Madrid")
console.log(isCityPresent)

/**
 * Find lastIndex of an element
 */

const lstIdx = cities.lastIndexOf("Berlin")
console.log(lstIdx)

/**
 * Slice an array
 */
const arrayToSlice = [1,2,3,4,5,6]

const sliced = arrayToSlice.slice(1)
console.log(sliced)

/**
 * Splice an array: To replace, add, or remove an element from an array
 */

const sample = ["Madrid", "Berlin", "London", "Berlin"]

//Remove an item

let removed = sample.splice(1,1)
console.log(sample)

//Replace an item
const replace = sample.splice(1,1,"Barcelona")
console.log(sample)

/**
 * Sort array in asc
 */

const sorted = sample.sort(function(a,b){
    a - b; //b - a in desc.
})

console.log(sorted);

/**
 * reverse array
 */
const reversed = sorted.reverse()
console.log(reversed)



