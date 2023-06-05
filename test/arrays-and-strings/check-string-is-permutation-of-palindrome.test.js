"use strict";

import assert from "node:assert/strict";
import { describe, it } from 'node:test';

import isStringPermutationOfPalindrome from "../../src/arrays-and-strings/check-string-is-permutation-of-palindrome.js";

describe("check-string-is-permutation-of-palindrome", () => {
    it("should return true if string is permutation of palindrome", () => {
        assert.strictEqual(isStringPermutationOfPalindrome("Tact Coa"), true); // Palindrome: atco cta
    });

    it("should return false if string is not a permutation of palindrome", () => {
        assert.strictEqual(isStringPermutationOfPalindrome("john doe"), false);
    });
});
