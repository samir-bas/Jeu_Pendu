// Jeu du Pendu

// Number of Attempts 
const attempts = 7;
// Choice a word in an array with function Random
var word;
 // Word to find
 var wordToFind;
// Declare an array of words to find
let words = [
    "FEUILLES",
    "VOITURE",
    "POULETS",
    "SALADES",
    "CLOCHE"
]

// Declare an array of allowed letters
let allowedLetters = [
    "J",
    "R",
    "Q"
]

// Return a Random number 
function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Function fill a string with 2 parameters : character and number
// First method
/* function fillString(character, number) {
    let string = "";
    for (let i = 1; i <= number; i++) {
        string += character;
    }
    return string;
} */
// Second method
function fillString(character, number) {
    return character.repeat(number);
}

// check one caracter in entry and must be a letter
// First method
// do 
// {
//     var letter = prompt("Enter one letter").toUpperCase();
//     console.log(letter.charCodeAt());
// }
// while (letter.length !== 1 || (letter.charCodeAt() < 65 || letter.charCodeAt() > 90))

// Second method
function enterLetter() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter;
    do {
        letter = prompt("Enter one letter").toUpperCase();
    }
    while (letter.length !== 1 || !letters.includes(letter))
    return letter
}

function displayFoundLetters(lt) {
    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] === lt) {
            // wordToFind[i] = letter; Ne marche pas
            wordToFind = wordToFind.substring(0, i) + lt + wordToFind.substring(i + 1);
        }
    }
    return wordToFind
}

function displayRules() {
    let message = "- The player has 7 attempts to find a hidden word\n";
    message += "- The player enter a letter\n";
    message += "- If the letter is found in the word it will be displayed in their respective locations\n";
    message += "- If the word was found until the 7 attempts he win else he loses";
    alert(message);
}

// Begin Game
function beginGame() {
    // User Attempts
    let userAttempts = 0;
    userFoundLetters = 0;
    word = words[random(words.length)];
    wordToFind = fillString("_", word.length);
    while (userAttempts < attempts && word !== wordToFind) {
        userAttempts++;
        let letter = enterLetter();
        alert("Remaining " + (attempts - userAttempts) + " attempts\nWord : " + displayFoundLetters(letter));
        //console.log(userAttempts);
    }
    if (word !== wordToFind) {
        alert(`You lose the hidden word is : ${word}`);
    }
    else {
        alert(`You win the hidden word is : ${word}`);
    }
}

// Main Program
do {
    var choice = "";
    do {
        choice = prompt("- J : Jouer\n- R : Règles\n- Q : Quitter").toUpperCase();
    } while (!allowedLetters.join().includes(choice));
    switch (choice) {
        case "J":
            beginGame();
            break;
        case "R":
            displayRules();
            break;
        default:
    }
} while (choice !== "Q")
alert("Bye, see you later for a new game");
