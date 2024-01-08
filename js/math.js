//STEP 1
function dispAbsValue() {
    let num1 = parseInt($('num2-1').value)
    
    console.log(`${Math.abs(num1)}`)
}

//STEP 2
function dispFloatRoundedUp() {
    let num2 = parseFloat($('num2-2').value)
    
    console.log(`${Math.ceil(num2)}`)
}

//STEP 3
function dispFloatRoundedDown() {
    let num3 = parseFloat($('num2-3').value)
    
    console.log(`${Math.floor(num3)}`)
}

//STEP 4
function dispLargestSmallestNums() {
    let numlist4 = $('numlist2-4').value
    let numArray = numlist4.split(',')

    for (a in numArray ) {
        numArray[a] = parseInt(numArray[a], 10);
        // alert(`a= ${a}`)
        // alert(`numArray[a]= ${numArray[a]}`)
    }

    // Used for debugging
    // alert(numArray)
    // Reference Article: h t t p s : / / medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
    // alert(`MAX = ${Math.max.apply(Math, numArray) }`)   //works
    // alert(`MIN = ${Math.min.apply(Math, numArray) }`)   //works
    // alert(`MAX = ${Math.max(...numArray) }`)            //works (ES6/ES2016 destructuring assignment)
    // alert(`MIN = ${Math.min(...numArray) }`)            //works (ES6/ES2016 destructuring assignment)
     
    console.log(`${Math.max(...numArray)} is the largest number entered & ${Math.min(...numArray)} is the smallest number entered.`)
}

//STEP 5
function dispSquareRoot() {
    let num5 = parseFloat($('num2-5').value)
    
    console.log(`${Math.sqrt(num5)}`)
}

$('btn2-1').addEventListener('click', dispAbsValue)
$('btn2-2').addEventListener('click', dispFloatRoundedUp)
$('btn2-3').addEventListener('click', dispFloatRoundedDown)
$('btn2-4').addEventListener('click', dispLargestSmallestNums)
$('btn2-5').addEventListener('click', dispSquareRoot)

