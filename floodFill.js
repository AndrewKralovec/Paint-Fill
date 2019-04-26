var matrix, rows, cols

// Below arrays details all 8 possible movements
rows = [ -1, -1, -1,  0, 0,  1, 1, 1 ]
cols = [ -1,  0,  1, -1, 1, -1, 0, 1 ]

function isSafe ({ pos, target }) {
    var { x, y } = pos

    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length
        && matrix[x][y] == target
}

function floodFill ({ pos, replacement }) {
    var { x, y } = pos
    var target = matrix[x][y]
    matrix[x][y] = replacement

    for (var index = 0; index < rows.length; index++) {
        var pos = {
            x: parseInt(x) + rows[index],
            y: parseInt(y) + cols[index]
        }
        if (isSafe({ pos, target }))
            floodFill({ pos, replacement })
        
    }

}
