import assert from 'node:assert/strict';

function checkStringRotation(s1, s2) {
    const areStringsOfDifferentSize = s1.length !== s2.length;
    const isFirstStringEmpty = s1.length === 0;

    if (areStringsOfDifferentSize || isFirstStringEmpty) return false;

    const s1s1 = s1 + s1;
    return isSubstring(s1s1, s2);
}

function isSubstring(s1, s2) {
    return s1.includes(s2);
}

assert.deepStrictEqual(checkStringRotation("waterbottle", "erbottlewat"), true);
assert.deepStrictEqual(checkStringRotation("waterbottle", "erbottllwat"), false);
