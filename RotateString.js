// “ String: Rotate String
// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go".”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 


const rotateString = (stringInput, num) => {
    let leftpart = stringInput.slice(0, stringInput.length - num)
    let rightpart = stringInput.slice(stringInput.length - num)

    console.log(leftpart)
    console.log(rightpart)
    let result = rightpart + leftpart;
    console.log(result)

}



rotateString("Boris Godunov", 13) //returns "dunovBoris Go"

"vBoris Goduno" //1st rotation
"ovBoris Godun" //2nd rotation
"novBoris Godu" //3rd rotation
"unovBoris God" //4th rotation
"dunovBoris Go" //5th rotation







// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0, 3);
// var rest = fruits.slice(3)
// console.log(citrus, rest)
