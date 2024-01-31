"use strict";

class PalindromDetector {

    #input;

    constructor() {
        this.#input = require("readline-sync");
    }

    // Metodi ottaa käyttäjältä syötteen, muuttaa sen pieniksi kirjaimiksi ja kääntää sanan toisinpäin.
    // lopuksi testaa onko sana palidromi eli onko se sama kuin käännettynä.
    isPalindrom() {
        let userInput = this.#input.question("Kirjoita sana: ").toLowerCase();
        let userInputReverse = this.#reverseWord(userInput);
        return userInputReverse === userInput ? true: false;
    }

    #reverseWord(word) {
        let wordInReverse = new Array();

        for (let i = word.length - 1 ; i >= 0; i--) {
            wordInReverse.push(word[i]);
        }
        return wordInReverse.join("");
    }

    // Metodi joka ottaa sanan parametrina ja tarkistaa onko se palindromi.
    isPalindrom(userInput) {
        let userInputReverse = this.#reverseWord(userInput);
        return userInputReverse === userInput ? true: false;
    }
    
}

let detector = new PalindromDetector();
let result = new String();

result = detector.isPalindrom();
console.log(result);