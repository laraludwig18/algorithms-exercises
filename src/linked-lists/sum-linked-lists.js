"use strict";

import LinkedList from "./LinkedList.js";

export default function sumLinkedLists(firstList, secondList, reverse = false) {
    let firstListNumbersInStringFormat = firstList.toString();
    let secondListNumbersInStringFormat = secondList.toString();

    if (reverse) {
        firstListNumbersInStringFormat = firstListNumbersInStringFormat.split("").reverse().join("");
        secondListNumbersInStringFormat = secondListNumbersInStringFormat.split("").reverse().join("");
    }

    const sum = parseInt(firstListNumbersInStringFormat) + parseInt(secondListNumbersInStringFormat);

    return new LinkedList().addMany(Array.from(String(sum), Number));
}
