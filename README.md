#Word Counter Application

This is a Node.js application that reads a file from a user-provided path (either a local path or a web address) and provides the following statistics about the file:

- the total number of words;
- the total number of letters;
- the total number of spaces;
- words that repeat more than 10 times and the count of their occurrences.

###🗂  Project Structure

- **index.ts**: the entry point of the application;
- **functions.ts**: contains the main functions used in the application;
- **tsconfig.json**: TypeScript configuration file;
- **text.txt**: example text file used for testing;
- **__tests__**: folder that contains the files for testing the individual functions

###🛠️ Installation

1. **Requirements:**
**[node.js](https://nodejs.org/en)** >= v20.13.1
**[bun](https://bun.sh)** >= 1.1.8

2. **Clone the repository:**
```bash
git clone <repository-url>
cd <repository-directory>
```

3. **Install dependencies:**
```bash
bun install
```

4. **Start the application:**
```bash
bun run index.ts
```
   
###⚡ Functions

**readPath**
Reads the content of a file from a given path provided by the user.

**totWords**
Calculates the total number of words in a given text.

**totLetters**
Calculates the total number of letters in a given text, excluding spaces and special characters.

**totSpaces**
Calculates the total number of empty spaces in a given text.

**totRepeatWords**
Returns an object with words that are repeated more than 10 times and their count.

###🦺 Tests

This project includes unit tests for the main functions using Bun.sh.
All tests are located in the __tests__ directory.

To run the tests, use:
```bash
bun test 
```

<br>
<br>
🔥 This project was created using `bun init` in bun v1.1.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
