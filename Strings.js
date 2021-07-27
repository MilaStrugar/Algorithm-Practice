// “You are given a string that may contain sequences of consecutive characters. Create a function to shorten a string by including the character, then the number of times it appears. For "aaaabbcddd", return "a4b2c1d3". If result is not shorter (such as "bb"=>"b2"), return the original string.”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 


function encodeString(str) {
    let count = 1;
    let outputletter = str[0]
    let output = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count += 1
        }
        else {
            output += `${outputletter}${count}`
            outputletter = str[i + 1]
            count = 1
        }
    }
    console.log(output)

}


encodeString("aaabbbbbccdddeee") //"a3b5c2d3e3"


//T diagram time!!!
// count = 1->2->3->1->2
// outputletter = "b"
// output = "a3"
// i= 0->1->2->3 