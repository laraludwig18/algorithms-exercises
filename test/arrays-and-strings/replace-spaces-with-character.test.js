"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import replaceSpacesWithCharacter from "../../src/arrays-and-strings/replace-spaces-with-character.js";

describe("replace-spaces-with-character", () => {
    it("should return replaced string with default character on spaces", () => {
        assert.strictEqual(replaceSpacesWithCharacter("Mr John Smith    ", 13), "Mr%20John%20Smith");
    });

    it("should return replaced string with specified character on spaces", () => {
        assert.strictEqual(replaceSpacesWithCharacter("Mr John Smith  ", 13, "%0"), "Mr%0John%0Smith");
        assert.strictEqual(replaceSpacesWithCharacter("Mr John Smith", 13, "0"), "Mr0John0Smith");
    });
});
