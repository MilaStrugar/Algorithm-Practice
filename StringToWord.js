// “ String to Word Array
// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"].
//  ”


// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 

// "Let's get it y'all" ["let's", "get", "it", "y'all"]

function stringToWordArray(stringInput) {
    //your code here
    let result = []
    let word = ""
    for (var i = 0; i < stringInput.length; i++) {
        if (stringInput[i] != " ") {
            word += stringInput[i]
        }
        else if (stringInput[i] == " ") {
            result.push(word)
            word = ""
        }
        // console.log(result)
    }
    result.push(word)
    console.log(result)

}

stringToWordArray("Let's get it y'all")