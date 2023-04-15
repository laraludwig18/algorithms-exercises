import assert from 'node:assert/strict';

function isStringPermutationOfPalindrome(string) {
    let countOdd = 0;
    let lettersCount = {};
    const stringWithOnlyLettersAndCaseInsensitive = string.toLowerCase().replace(/[^a-zA-Z]+/g, "");

    for (const letter of stringWithOnlyLettersAndCaseInsensitive.split("")) {
        const currentCount = lettersCount[letter] || 0;
        lettersCount[letter] = currentCount + 1;
        
        const isCountOdd = lettersCount[letter] % 2 === 1;
        isCountOdd ? countOdd++ : countOdd--;
    }

    return countOdd <= 1;
}

assert.strictEqual(isStringPermutationOfPalindrome("Tact coa1"), true);
assert.strictEqual(isStringPermutationOfPalindrome("john doe"), false);
