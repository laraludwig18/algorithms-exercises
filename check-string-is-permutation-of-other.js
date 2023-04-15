import assert from 'node:assert/strict';

function isStringPermutationOfOther(firstString, secondString) {
    if (firstString.length !== secondString.length) return false;

    const sortedFirstString = sortString(firstString);
    const sortedSecondString = sortString(secondString);

    return sortedFirstString === sortedSecondString;
}

function sortString(string) {
    const characters = string.split("");
    characters.sort();

    return characters.join("");
}

assert.deepStrictEqual(isStringPermutationOfOther("john", "nhoj"), true);
assert.deepStrictEqual(isStringPermutationOfOther("john", "john "), false);
assert.deepStrictEqual(isStringPermutationOfOther("john", "doe"), false);
