function dec2binary(num) {
    let newstr = ""
    while (num > 0) {
        if (num % 2 == 1) {
            newstr += "1"
            num = Math.floor(num / 2)
        }
        if (num % 2 == 0) {
            newstr += "0"
            num = Math.floor(num / 2)
        }
    }
    console.log(newstr.split("").reverse().join(""))

}


dec2binary(25) //return "11001"
dec2binary(56)