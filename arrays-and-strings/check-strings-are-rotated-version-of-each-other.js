'use strict';

import assert from 'node:assert/strict';

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean} True if s1 and s2 are rotated versions of each other, otherwise false
 */
function areStringsRotatedVersionsOfEachOther(s1, s2) {
  if (!s1 || !s2) throw new Error('invalid input');

  const areStringsOfDifferentSize = s1.length !== s2.length;
  const isFirstStringEmpty = s1.length === 0;

  if (areStringsOfDifferentSize || isFirstStringEmpty) return false;

  const s1s1 = s1 + s1;
  return isSubstring(s1s1, s2);
}

function isSubstring(string, substr) {
  return string.includes(substr);
}

assert.deepStrictEqual(areStringsRotatedVersionsOfEachOther("waterbottle", "erbottlewat"), true);
assert.deepStrictEqual(areStringsRotatedVersionsOfEachOther("waterbottle", "erbottllwat"), false);
