function dec2hex(num) {
    let hexvals = '0123456789ABCDEF';
    let remainders = [];
    let hexresult = '';

    while (num > 0) {
        let remainder = num % 16
        remainders.push(remainder)
        num = Math.floor(num / 16)
    }

    // console.log(remainders)
    //remainders look like this for example: [ 0, 13, 7 ]
    for (let i = remainders.length - 1; i >= 0; i--) {
        hexresult += hexvals[remainders[i]]

    }
    // console.log(hexresult)
    return hexresult

}

dec2hex(2000) //7D0


// Conversion steps:
// Divide the number by 16.
// Get the integer quotient for the next iteration.
// Get the remainder for the hex digit.
// Repeat the steps until the quotient is equal to 0.