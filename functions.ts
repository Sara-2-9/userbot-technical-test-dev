import _ from 'lodash';

// function that reads the path entered by the user and returns the text of the file
export async function readPath():Promise<string> {
    try {
        const prompt = "Enter the path of your file: ";
        process.stdout.write(prompt);

        for await (const line of console) {
        const file = Bun.file(line);
        const text = await file.text(); 
        return text;
        }  
        process.exit(0);
    } catch {
        return Promise.reject("Wrong path!");
    }
}

// function that counts the words of the text in the file
export function totWords(text: string):number {
    const totWords = _.words(text);
    return totWords.length; 
}

// function that counts the letters of the text in the file
export function totLetters(text: string):number {
    const totLetters = _.size(_.filter(text, char => /[a-zA-Z]/.test(char)));
    return totLetters;
}

// function that counts the empty spaces of the text in the file
export function totSpaces(text:string):number {
    const totSpaces = _.size(_.filter(text, char => char === " "));
    return totSpaces;
}

// function that returns words that are repeated more than 10 times in the text of the file, with their occurrences
export function totRepeatWords(text:string): {[x: string]: number;} {
    const arrayWords = _.words(_.toLower(text));
    const objectArray = _.groupBy(arrayWords);
    const filteredObject = _.pickBy(objectArray, array => array.length >= 10);
    const result = _.mapValues(filteredObject, array => array.length);
    return result;
}
