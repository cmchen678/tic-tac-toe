var board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

var symbol = ["X", "O"];
var playerX;
var playerO;

var turn;

function getValue(row, column) {
    return board[row][column];

}


function setValue(row, column, value) {
    board[row][column] = value;

    console.log(board);


}

function renderBoard2(board) {
    for (var i = 0; i < board.length; i++) {
        var rowArr = [];
        for (var y = 0; y < board[i].length; y++) {
            var cell = `<div id="${i}${y}">${getValue(i, y)}</div>`
            rowArr.push(cell)


            //console.log(getValue(i, y));
        }
        console.log(rowArr);
    }
}


console.log(renderBoard2(board));