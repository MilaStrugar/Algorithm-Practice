// https://medium.com/@LindaVivah/learn-how-to-read-binary-in-5-minutes-dac1feb991e


//create a function that accepts a string that represents a binary number (ex: 1011001), and it returns the decimal number equivalent 
function dec2bin(stringInput) {
    let count = 0;
    let total = 0;
    for (let i = stringInput.length - 1; i >= 0; i--) {
        if (stringInput[i] == 1) {
            total = total + (2 ** count)
            count++
        }
        else {
            count++
        }
    }
    return total

}


console.log(dec2bin('1011001')) //return 89