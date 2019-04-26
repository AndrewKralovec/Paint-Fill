const $ = require('jquery')(window)
let $matrix, $replacement, $table

const initView = () => {
    matrix = deepTrim($matrix.val())
    matrix = matrixGrid()

    paintTable()
    matrix = []
}


const paintTable = () => {
    let table = matrix.map(row => {
        let cols = row.map(col => '<td class="'+ col + '">' + col + '</td>').join('')
        return '<tr>' + cols + '</tr>'
    })

    $table.html(table.join(''))
    $('td').click(fillClick)
}

function fillClick() {

    matrix = deepTrim($matrix.val())
    matrix = matrixGrid()

    let replacement = $replacement.val()
    let x = $(this).parent().parent().children().index($(this).parent())
    let y = $(this).parent().children().index($(this))
    let pos = { x, y }

    floodFill({ pos, replacement })
    paintTable()
    $matrix.val(matrixString())

    matrix = []
}

const matrixGrid = () => matrix.split('\n').map(elm => elm.split(','))

const matrixString = () => matrix.map(elm => elm.join(',')).join('\n')

const deepTrim = input => {
    return $.trim(input)
        .replace(/\s*[\r\n]+\s*/g, '\n')
        .replace(/(<[^\/][^>]*>)\s*/g, '$1')
        .replace(/\s*(<\/[^>]+>)/g, '$1')
}

$(document).ready(function () {
    $matrix = $("#matrix")
    $replacement = $("#replacement")
    $table = $('table')

    initView()
})
