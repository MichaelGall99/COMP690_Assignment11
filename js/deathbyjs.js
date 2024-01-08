//STEP 1
function alphabetizeString(str) {
    let sortedStr = str.split('').sort().join('')
    return sortedStr
}

function dispAlphabeticalOrder() {
    let string1 = $('string4-1').value
    let sortedStr = alphabetizeString(string1)

    // Used for debugging
    // alert(`Original String: ${string1}`)
    // alert(`Alphabetized String: ${sortedStr}`)

    console.log(sortedStr)
}


//STEP 2
function firstCharCapitalized(str) {
    let wordArray = str.split(' ')
    
    for (i in wordArray ) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
    }

    return wordArray.join(' ')
}

function dispFirstCharCapitalized() {
    let string2 = $('string4-2').value
    let capitalizedWords = firstCharCapitalized(string2)

    // Used for debugging
    // alert(`Original String: ${string2}`)
    // alert(`Capitalized String: ${capitalizedWords}`)

    console.log(capitalizedWords)
}


//STEP 3
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0

    for (let oneChar of str.toLowerCase()) {
        if (vowels.includes(oneChar)) {
            vowelCount++;
        }
    }

    return vowelCount
}

function dispCountVowels() {
    let string3 = $('string4-3').value
    let vowelCount = countVowels(string3)

    console.log(vowelCount)
}

//STEP 4
function generateId(len) {
    let id = Math.random().toString(36).substring(2, len+2).split('').map(c => Math.random() < 0.5 ? c.toUpperCase() : c).join('')

    return id
}

function dispAutoGenId() {
    let num4 = parseInt($('num4-4').value)
    let id = ''

    do {
        if (num4 >= 1 && num4 <= 10) {
            id = generateId(num4)
        } else {
            alert(`Please enter a number between 1-10.`)
            $('num4-4').value = ''
            $('num4-4').focus()
        }
    } while (num4 < 1 && num4 > 10)

    console.log(id)
}

//STEP 5
function longestStringInArray(str) {
    let strArray = str.split(',')
    let longestStr = ''

    for (i in strArray ) {
        if (strArray[i].trim().length > longestStr.trim().length) {
            longestStr = strArray[i].trim()
        }
    }

    return longestStr
}

function dispLargestCountryName() {
    let string5 = $('string4-5').value
    let longestCountryName = longestStringInArray(string5)

    console.log(longestCountryName)
}

$('btn4-1').addEventListener('click', dispAlphabeticalOrder)
$('btn4-2').addEventListener('click', dispFirstCharCapitalized)
$('btn4-3').addEventListener('click', dispCountVowels)
$('btn4-4').addEventListener('click', dispAutoGenId)
$('btn4-5').addEventListener('click', dispLargestCountryName)
