//below works!
let input = 'hello';

function inputChange() {
    let returnMsg = '';
    let shift = 1;
    for (letter of input) {
        returnMsg += shiftLetter(letter, shift);
    }
    console.log(returnMsg);
    
}

function shiftLetter(letter, shift) {
    let newLetter = '';
    
    let letterCode = letter.charCodeAt(0)
    let newLetterCode = letterCode + shift
    
    if (newLetterCode < 97) {
        newLetterCode += 26;
    } else if(newLetterCode > 122) {
        newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter
}
console.log(inputChange())


//below doesn't!

function decipher() {

    let string = 'abcdefg';
    let result = '';
    for (let i = 0; i < string.length; i++) {
        result += stringToCode(string[i])
        //console.log(result)
    }
}
// function stringToCode(x) {
    
    //     for (let i = 0; i < x.length; i++) {
        //         let code = x[i].charCodeAt(i);
        //         return code
        //     }
        // }
        
        //console.log(decipher())
        //console.log(stringToCode('ab'))
        
        
        // function stringToCode(x) {
            //     for (let chr of x) {
                //         chr.charCodeAt()
                //         console.log(chr)
//     }
// }
// console.log(stringToCode('ab'))


// console.log(string);
// for(let i = 0; i < string.length; i++){
//     let stringCode =  string[i]
// }

// let stringCode = string.charCodeAt(0);
// console.log(stringCode)

// string = String.fromCharCode(stringCode);
// console.log(string)