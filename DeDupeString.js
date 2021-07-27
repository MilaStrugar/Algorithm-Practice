// “ String: Dedupe
// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".
//  ”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 

const dedupeChars = (stringInput) => {
    let tempArr = [];
    //loop through the stringInput and push each character into the tempArr. if the character already exists in the tempArr, then remove the existing character, and push the new/latest instance of that character into tempArr
    for (var i = 0; i < stringInput.length; i++) {
        if (tempArr.includes(stringInput[i])) {
            for (var j = 0; j < tempArr.length; j++) {
                if (tempArr[j] == stringInput[i]) {
                    tempArr.splice(j, 1)
                }
            }
        }
        tempArr.push(stringInput[i])
    }
    console.log(tempArr)

    let resultString = ""
    for (x in tempArr) {
        console.log(tempArr[x])
        resultString += tempArr[x]
    }

    return resultString



}


console.log(dedupeChars("Snaps! crackles! pops!"))




// ["S", "n", "r", "a", "c", "k","l","e" , " ", "o", "p", "s", "!"]-> "Snarackle ops!"

//helpful links
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


const months = ['Jan', 'March', 'April', 'June'];
months.splice(2, 1);
console.log(months)


// Array.includes(value)