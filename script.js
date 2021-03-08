
function encrypt() {
    let userInput = document.getElementById('code').value;
    let shift = document.getElementById('number').value;
    let encryptedMessage = '';

    for (letter of userInput) {
        encryptedMessage += letterChange(letter,shift);
    }
    console.log(encryptedMessage);
}

function letterChange(letter,shift) {
    let newLetter = '';
    
    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + (shift % 26);
    
    if (newLetterCode < 97) {
        newLetterCode += 26;
    } else if(newLetterCode > 122) {
        newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter
}

console.log(encrypt())



//below only works for 1 letter substitution!
/*const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function encrypt() {
    let text = document.getElementById('code').value;
    let returnText = [];
    for (let i = 0; i < text.length; i++) {
        returnText.push(enc(text[i]));
        console.log(returnText)
    }
    ;
}

function enc(x) {
    if (x === 'a') {
        return 'e';

    }


}

function loop() {
    let number = 3

    /*while (number < number.length) {
        return 
    }*/
    // for (let i = 0; i < alphabet.length; i++) {
    //     if(i === number){
    //         break;
    //     }
    //     console.log(alphabet[i])
    // }

//console.log(loop())
