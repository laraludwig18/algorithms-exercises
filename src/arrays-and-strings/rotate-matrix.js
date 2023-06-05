"use strict";

/**
 * Time complexity: O(N²)
 * Space complexity: O(1)
 *
 * @param {Array<Array<number>>} matrix NxN matrix
 * @return {Array<Array<number>>} Modified Rotated matrix
 */
export default function rotateMatrix90Clockwise(matrix) {
    const isEmptyMatrix = matrix.length === 0;
    const areMatrixRowsAndColumnsSizeDifferent = matrix.length !== matrix[0].length;
    if (isEmptyMatrix || areMatrixRowsAndColumnsSizeDifferent) throw new Error("Invalid matrix");

    // no need to do anything to rotate a 1x1 matrix
    if (matrix.length < 2) return matrix;

    const matrixSize = matrix.length;

    for (let row = 0; row < matrixSize / 2; row++) {
        const firstRow = row;
        const lastRow = matrixSize - 1 - row;

        for (let column = firstRow; column < lastRow; column++) {
            const offset = column - firstRow;
            const top = matrix[firstRow][column];

            // left -> top
            matrix[firstRow][column] = matrix[lastRow - offset][firstRow];

            // bottom -> left
            matrix[lastRow - offset][firstRow] = matrix[lastRow][lastRow - offset];

            // right -> bottom
            matrix[lastRow][lastRow - offset] = matrix[column][lastRow];

            // top -> right
            matrix[column][lastRow] = top;
        }
    }

    return matrix;
}
