// Below arrays details all 8 possible movements
const rows = [ -1, -1, -1,  0, 0,  1, 1, 1 ]
const cols = [ -1,  0,  1, -1, 1, -1, 0, 1 ]

const isSafe = ({ matrix, pos, target }) => {
    const { x, y } = pos

    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length
        && matrix[x][y] == target
}

const floodFill =  ({ matrix, pos, replacement }) => {
    const { x, y } = pos
    const target = matrix[x][y]
    matrix[x][y] = replacement

    for (let index = 0; index < rows.length; index++) {
        const pos = {
            x: parseInt(x) + rows[index],
            y: parseInt(y) + cols[index]
        }
        if (isSafe({ matrix, pos, target }))
            floodFill({ matrix, pos, replacement })
        
    }

}
module.exports = floodFill