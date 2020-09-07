function findArrayElement(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            return true;
        }
    }
    return false;
}

let array = [1, 3, 5, 7, 8, 10];
let inputNumber = +prompt("Enter a random integer: ", "");
findArrayElement(array, inputNumber);
if (findArrayElement(array, inputNumber)) {
    alert("Your number is in the created array!");
} else {
    alert("Your number is NOT in the created array!");
}


