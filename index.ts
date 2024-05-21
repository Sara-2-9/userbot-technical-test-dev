import { readPath, totWords, totLetters, totSpaces, totRepeatWords } from "./functions";

const textFile = await readPath();
function finalResult(){
    console.log("Number of words:", totWords(textFile));
    console.log("Number of letters:", totLetters(textFile));
    console.log("Number of spaces:", totSpaces(textFile));
    console.log("Words repeated more than 10 times (word: number of occurrences):", totRepeatWords(textFile));
}

finalResult();
