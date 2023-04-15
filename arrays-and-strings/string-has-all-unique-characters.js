import assert from 'node:assert/strict';

export default function hasAllUniqueCharacters(string) {
    const stringSize = string.length;
    const asciiCharacterQuantity = 128;
    if (stringSize > asciiCharacterQuantity) return false;

    let existentCharacters = {};

    for (let i = 0; i < stringSize; i++) {
        const char = string.charAt(i);
        
        const characterAlreadyExists = existentCharacters[char] === true;
        if (characterAlreadyExists) {
            return false;
        }

        existentCharacters[char] = true;
    }

    return true;
}

assert.strictEqual(hasAllUniqueCharacters("john"), true);
assert.strictEqual(hasAllUniqueCharacters("johnN"), true);
assert.strictEqual(hasAllUniqueCharacters("111111"), false);
