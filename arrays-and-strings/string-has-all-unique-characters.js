'use strict';

import assert from 'node:assert/strict';

/**
 * Time complexity: O(1)
 * Space complexity: O(N)
 *
 * @param {string} string
 * @return {boolean} True if unique characters, otherwise false
 */
export default function hasAllUniqueCharacters(string) {
    const stringSize = string.length;
    const asciiCharacterQuantity = 128;
    if (stringSize > asciiCharacterQuantity) return false;

    const chars = new Set(stringSize);

    for (let i = 0; i < stringSize; i++) {
        const char = string.charAt(i);

        if (chars.has(char)) return false;

        chars.add(char);
    }

    return true;
}

assert.strictEqual(hasAllUniqueCharacters("john"), true);
assert.strictEqual(hasAllUniqueCharacters("johnN"), true);
assert.strictEqual(hasAllUniqueCharacters("111111"), false);
