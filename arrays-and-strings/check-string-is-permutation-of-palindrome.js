"use strict";

import assert from "node:assert/strict";

/**
 * A palindrome is a word, phrase, number, or sequence of characters that reads the same way forwards and backwards.
 * 
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {string} string
 * @return {boolean} True if input string (case insensitive and ignoring spaces) is a permutation of a palindrome, otherwise false.
 */
function isStringPermutationOfPalindrome(string) {
    if (!string) return false;

    const chars = new Set();
    const caseInsensitiveStringChars = string.toLowerCase().split("");
    for (const char of caseInsensitiveStringChars) {
        if (char === " ") continue;

        if (chars.has(char)) chars.delete(char);
        else chars.add(char);
    }

    const existsOnlyOneCharCountEqualOrLessThanOne = chars.size <= 1;
    return chars.size <= 1;
}

assert.strictEqual(isStringPermutationOfPalindrome("Tact Coa"), true); // Palindrome: atco cta
assert.strictEqual(isStringPermutationOfPalindrome("john doe"), false);
