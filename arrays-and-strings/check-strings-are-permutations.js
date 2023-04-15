'use strict';

import assert from 'node:assert/strict';

/**
 * Time complexity: O(N + M)
 * Space complexity: O(N + M)
 *
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean} True if first and second strings are permutations otherwise false
 */

function areStringsPermutations(firstString, secondString) {
    if (firstString.length !== secondString.length) return false;

    const chars = new Map();

    for (let i = 0; i < firstString.length; ++i) {
        const char = firstString.charAt(i);
        const charCount = chars.get(char) + 1 || 1;
        chars.set(char, charCount);
    }

    // Check if the two strings have identical character counts
    for (let i = 0; i < secondString.length; ++i) {
        const char = secondString.charAt(i);
        const charCount = chars.get(char);

        if (!charCount) return false;

        if (charCount === 1) chars.delete(char);
        else chars.set(char, charCount - 1);
    }

    return chars.size === 0;
}

assert.deepStrictEqual(areStringsPermutations("john", "nhoj"), true);
assert.deepStrictEqual(areStringsPermutations("john", "john "), false);
assert.deepStrictEqual(areStringsPermutations("john", "doe"), false);
