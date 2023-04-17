"use strict";

import assert from "node:assert/strict";

/**
 * Time complexity: O(N * M)
 * Space complexity: O(N + M)
 *
 * @param {Array<Array<number>>} matrix NxM matrix
 * @return {Array<Array<number>>} Modified Zeroed matrix
 */
function zeroMatrix(matrix) {
    if (!matrix) throw new Error("Invalid matrix");

    if (matrix.length === 0) return matrix;

    const rows = new Array(matrix.length);
    const columns = new Array(matrix[0].length);

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            if (matrix[row][column] === 0) {
                rows[row] = true;
                columns[column] = true;
            }
        }
    }

    for (let row = 0; row < rows.length; row++) {
        if (rows[row]) nullifyRow(matrix, row);
    }

    for (let column = 0; column < columns.length; column++) {
        if (rows[column]) nullifyColumn(matrix, column);
    }

    return matrix;
}

function nullifyRow(matrix, row) {
    for (let column = 0; column < matrix[0].length; column++) {
        matrix[row][column] = 0;
    }
}

function nullifyColumn(matrix, column) {
    for (let row = 0; row < matrix.length; row++) {
        matrix[row][column] = 0;
    }
}

assert.deepStrictEqual(
    zeroMatrix(
        [[0, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]]),
    [[0, 0, 0, 0],
    [0, 6, 7, 8],
    [0, 10, 11, 12],
    [0, 14, 15, 16]]);

assert.deepStrictEqual(
    zeroMatrix(
        [[1, 2, 3, 4],
        [5, 0, 7, 8],
        [9, 10, 11, 12]]),
    [[1, 0, 3, 4],
    [0, 0, 0, 0],
    [9, 0, 11, 12]]);
