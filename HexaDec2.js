// https://owlcation.com/stem/Convert-Hex-to-Decimal


function hex2dec(str) {
    let exponentnum = 0;
    let hexChars = "0123456789ABCDEF";
    let total = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        let decversion = hexChars.indexOf(str[i]);
        console.log("HEX VERSION IS THIS", decversion);
        let aftermultiply = decversion * 16 ** exponentnum;
        total += aftermultiply;
        console.log("after multiply is this", aftermultiply);
        exponentnum++

    }
    console.log(total)

}

hex2dec("C9") //201
hex2dec("22B") //555