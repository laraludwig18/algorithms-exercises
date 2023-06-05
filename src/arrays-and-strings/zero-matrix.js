"use strict";

/**
 * Time complexity: O(N * M)
 * Space complexity: O(N + M)
 *
 * @param {Array<Array<number>>} matrix NxM matrix
 * @return {Array<Array<number>>} Modified Zeroed matrix
 */
export default function zeroMatrix(matrix) {
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
