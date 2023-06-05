"use strict";

import assert from "node:assert/strict";
import LinkedList from "./LinkedList.js";

function sumLinkedLists(firstList, secondList, reverse = false) {
    let firstListNumbersInStringFormat = firstList.toString();
    let secondListNumbersInStringFormat = secondList.toString();

    if (reverse) {
        firstListNumbersInStringFormat = firstListNumbersInStringFormat.split("").reverse().join("");
        secondListNumbersInStringFormat = secondListNumbersInStringFormat.split("").reverse().join("");
    }

    const sum = parseInt(firstListNumbersInStringFormat) + parseInt(secondListNumbersInStringFormat);

    return new LinkedList().addMany(Array.from(String(sum), Number));
}

const sumList = sumLinkedLists(
    new LinkedList()
        .addMany([6, 1, 7]),
    new LinkedList()
        .addMany([2, 9, 5]));

assert.strictEqual(sumList.toString(), "912");

const reverse = true;
const sumListReverse = sumLinkedLists(
    new LinkedList()
        .addMany([7, 1, 6]),
    new LinkedList()
        .addMany([6, 9, 2]),
    reverse);

assert.strictEqual(sumListReverse.toString(), "913");
