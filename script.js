let userInput, shift;

function encrypt() {
    userInput = document.getElementById('code').value;
    shift = document.getElementById('number').value;
    let encryptedMessage = '';

    for (letter of userInput) {
        encryptedMessage += letterChange(letter,shift);
    }
    document.getElementById('result').innerHTML= encryptedMessage;
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


setTimeout(() => {
    console.log(userInput,shift)
},10000)

