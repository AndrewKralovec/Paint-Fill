// Matrix position combinations, 8 total.
let rows = [-1, -1, -1, 0, 0, 1, 1, 1]
let cols = [-1, 0, 1, -1, 1, -1, 0, 1]


/**
 * Given a `target`, check if its within the `matrix`
 * and if the `target` matches node at `pos`.
 * @param {Object} { matrix, pos, target }
 * @returns Boolean
 */
let checkBounds = ({ matrix, pos, target }) => {
    let { x, y } = pos

    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length
        && matrix[x][y] == target
}

/**
 * Given a `pos` in the `matrix`, replace the node with the
 * `replacement` node. Check the nodes edges for a matching node.
 * If a match is found call this function on the matching node.
 * @param {Object} { matrix, pos, replacement }
 */
let floodFill = ({ matrix, pos, replacement }) => {
    let { x, y } = pos
    let target = matrix[x][y]
    matrix[x][y] = replacement

    for (let index = 0; index < rows.length; index++) {
        let pos = {
            x: parseInt(x) + rows[index],
            y: parseInt(y) + cols[index]
        }
        if (checkBounds({ matrix, pos, target }))
            floodFill({ matrix, pos, replacement })

    }

}

module.exports = floodFill
