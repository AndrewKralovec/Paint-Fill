let $matrix, $replacement, $table
let $ = require('jquery')
let floodFill = require('./floodFill')

/**
 * Create the table from the initial matrix input value.
 */
let initView = () => {
    let matrix = matrixGrid($matrix.val())
    paintTable(matrix)
}

/**
 * When table cell is click, call the floodFill function given matrix,
 * replacement, and table cell values.
 * @param {Object} event
 */
let fillClick = (event) => {

    let matrix = matrixGrid($matrix.val())
    let replacement = $replacement.val()
    let x = $(event.target).parent().parent().children().index($(event.target).parent())
    let y = $(event.target).parent().children().index($(event.target))
    let pos = { x, y }

    floodFill({ matrix, pos, replacement })

    paintTable(matrix)
    $matrix.val(matrixString(matrix))
}

/**
 * Loop through the `matrix` and append the table version to the
 * table element. The td click event is re-registered.
 * @param {Array} matrix
 */
let paintTable = matrix => {
    let table = matrix.map(row => {
        let cols = row.map(col => '<td class="' + col + '">' + col + '</td>').join('')
        return '<tr>' + cols + '</tr>'
    })

    $table.html(table.join(''))
    $('td').click(fillClick)
}

/**
 * Trim & split `input` into an 2d array 
 * @param {String} input
 */
let matrixGrid = input => {
    return $.trim(input)
        .replace(/\s*[\r\n]+\s*/g, '\n')
        .replace(/(<[^\/][^>]*>)\s*/g, '$1')
        .replace(/\s*(<\/[^>]+>)/g, '$1')
        .split('\n')
        .map(elm => elm.split(','))
}

/**
 * Convert `matrix` into a string value
 * @param {Array} matrix
 */
let matrixString = matrix => matrix.map(elm => elm.join(',')).join('\n')

$(document).ready(() => {
    $matrix = $("#matrix")
    $replacement = $("#replacement")
    $table = $('table')
    initView()
})
