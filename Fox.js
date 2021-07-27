let x = [
    ["quick", "lazy"],
    ["brown", "grey", "orange"],
    ["fox", "dog"]
    // ["!", "?"]

]

// ["quick brown fox", "quick brown dog",  ...]

function allcombs(words) {
    let results = [];
    function helper(comb, i) {
        //this base case means that we have gotten one word from each array
        if (i == words.length) {
            results.push(comb)
        }
        else {
            for (var j = 0; j < words[i].length; j++) {
                helper(comb + words[i][j] + " ", i + 1)
            }
        }
    }
    helper("", 0)
    return results
}

console.log(allcombs(x))