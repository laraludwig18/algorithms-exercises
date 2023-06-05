"use strict";

/**
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * @param {string} string
 * @return {boolean} True if unique characters, otherwise false
 */
export default function hasAllUniqueCharacters(string) {
    const stringSize = string.length;
    const asciiCharacterQuantity = 128;
    if (stringSize > asciiCharacterQuantity) return false;
    
    const chars = new Set();

    for (let i = 0; i < stringSize; i++) {
        const char = string.charAt(i);

        if (chars.has(char)) return false;

        chars.add(char);
    }

    return true;
}
