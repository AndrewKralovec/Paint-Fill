// Below arrays details all 8 possible movements
let rows = [-1, -1, -1, 0, 0, 1, 1, 1]
let cols = [-1, 0, 1, -1, 1, -1, 0, 1]

let isSafe = ({ matrix, pos, target }) => {
    let { x, y } = pos

    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length
        && matrix[x][y] == target
}

let floodFill = ({ matrix, pos, replacement }) => {
    let { x, y } = pos
    let target = matrix[x][y]
    matrix[x][y] = replacement

    for (let index = 0; index < rows.length; index++) {
        let pos = {
            x: parseInt(x) + rows[index],
            y: parseInt(y) + cols[index]
        }
        if (isSafe({ matrix, pos, target }))
            floodFill({ matrix, pos, replacement })

    }

}
module.exports = floodFill
