const cells = document.querySelectorAll(".cell");
const turnText = document.querySelector(".turn");
const resultText = document.querySelector(".result");
const restartBtn = document.querySelector(".restart-btn");

let currentPlayer = "X";

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {

    for (let combination of winningCombinations) {

        let a = combination[0];
        let b = combination[1];
        let c = combination[2];

        if (
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return cells[a].textContent;
        }
    }

    return null;
}

function checkDraw() {
    for (let cell of cells) {
        if (cell.textContent === "") {
            return false;
        }
    }

    return true;
}

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.textContent !== "") {
         return;
        }

        cell.textContent = currentPlayer;

        let winner = checkWinner();

        if (winner) {
        resultText.textContent = `Player ${winner} Wins!`;
        turnText.textContent = "";
        return;
        }

        if (checkDraw()) {
        resultText.textContent = "It's a Draw!";
        turnText.textContent = "";
        return;
        }

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        turnText.textContent = `Player ${currentPlayer}'s Turn`;
    });
});

restartBtn.addEventListener("click", function() {

    cells.forEach(function(cell) {
        cell.textContent = "";
    });

    currentPlayer = "X";

    turnText.textContent = "Player X's Turn";
    resultText.textContent = "";

});