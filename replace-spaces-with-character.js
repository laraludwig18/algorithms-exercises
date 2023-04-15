import assert from 'node:assert/strict';

function replaceSpacesWithCharacter(stringWithSpaces, stringSize, character = "%20") {
    let string = stringWithSpaces.split("");
    const space = " ";
    const numberOfSpaces = countCharacter(string, stringSize, space);
    let newIndex = stringSize - 1 + numberOfSpaces * (character.length - space.length);

    for (let oldIndex = stringSize - 1; oldIndex >= 0; oldIndex--) {
        if (string[oldIndex] === space) {
            for (let characterIndex = 0; characterIndex < character.length; characterIndex++) {
                string[newIndex - characterIndex] = character.charAt(character.length - (1 + characterIndex))
            }
            newIndex -= character.length;
        } else {
            string[newIndex] = string[oldIndex]
            newIndex--
        }
    }

    return string.join("");
}

function countCharacter(string, stringSize, target) {
    let count = 0;
    for (let i = 0; i < stringSize; i++) {
        if (string[i] === target) {
            count++;
        }
    }

    return count;
}

assert.strictEqual(replaceSpacesWithCharacter("Mr John Smith    ", 13), "Mr%20John%20Smith");
assert.strictEqual(replaceSpacesWithCharacter("Mr John Smith  ", 13, "%0"), "Mr%0John%0Smith");
assert.strictEqual(replaceSpacesWithCharacter("Mr John Smith", 13, "0"), "Mr0John0Smith");
