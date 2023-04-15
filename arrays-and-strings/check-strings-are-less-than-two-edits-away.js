'use strict';

import assert from 'node:assert/strict';

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param  {string} firstString
 * @param  {string} secondString
 * @return {string} True if strings are less than two edits away, otherwise false
 */
function areStringsLessThanTwoEditsAway(firstString, secondString) {
    const firstStringSize = firstString.length;
    const secondStringSize = secondString.length;

    if (firstStringSize === secondStringSize) return checkReplace(firstString, secondString);
    if (firstStringSize + 1 === secondStringSize) return checkInsert(secondString, firstString);
    if (firstStringSize - 1 === secondStringSize) return checkInsert(firstString, secondString);

    return false;
}

function checkReplace(firstString, secondString) {
    let foundDifference = false;
    const stringSize = firstString.length;

    for (let i = 0; i < stringSize; i++) {
        if (firstString.charAt(i) !== secondString.charAt(i)) {
            if (foundDifference) return false;

            foundDifference = true;
        }
    }

    return true;
}

function checkInsert(biggerString, smallerString) {
    let biggerStringIndex = 0;
    let smallerStringIndex = 0;

    while (biggerStringIndex < biggerString.length && smallerStringIndex < smallerString.length) {
        if (biggerString.charAt(biggerStringIndex) !== smallerString.charAt(smallerStringIndex)) {
            if (biggerStringIndex !== smallerStringIndex) return false;

            biggerStringIndex++;
        } else {
            biggerStringIndex++;
            smallerStringIndex++;
        }
    }

    return true;
}

assert.strictEqual(areStringsLessThanTwoEditsAway("pale", "ple"), true);
assert.strictEqual(areStringsLessThanTwoEditsAway("pales", "pale"), true);
assert.strictEqual(areStringsLessThanTwoEditsAway("pale", "bale"), true);
assert.strictEqual(areStringsLessThanTwoEditsAway("pale", "bae"), false);
