function checkCharacter(string) {
    let count = 0;
    let vowelArr = "AOUIEaouie";
    for (let i = 0; i < string.length; i++) {
        if (vowelArr.indexOf(string[i]) >= 0) {
            count++;
        }
    }
    if (string.length === 0) {
        document.write("That word DON'T have any vowel!");
    } else {
        document.write("That word have " + count + " vowel!");
    }
}

let inputString = prompt("Enter a word: ", "");
checkCharacter(inputString);



