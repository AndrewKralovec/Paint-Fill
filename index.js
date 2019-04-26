var $matrix, $replacement, $table, $td

function initView() {
    matrix = deepTrim($matrix.val())
    matrix = matrixGrid()

    paintTable()
    matrix = []
}

function paintTable() {
    var table = matrix.map(function (row) {
        var cols = row.map(function (col) {
            return '<td class="'+ col + '">' + col + '</td>'
        }).join('')

        return '<tr>' + cols + '</tr>'
    })

    $table.html(table.join(''))
    $('td').click(fillClick)
}

function fillClick() {

    matrix = deepTrim($matrix.val())
    matrix = matrixGrid()

    var replacement = $replacement.val()
    var x = $(this).parent().parent().children().index($(this).parent())
    var y = $(this).parent().children().index($(this))
    var pos = { x, y }

    floodFill({ pos, replacement })
    paintTable()
    $matrix.val(matrixString())

    matrix = []
}

function matrixGrid() {
    return matrix.split('\n').map(function(elm) {
        return elm.split(',')
    })
}

function matrixString() {
    return matrix.map(function(elm) {
        return elm.join(',')
    }).join('\n')
}

function deepTrim(input) {
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
