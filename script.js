const cells = document.querySelectorAll(".cell");
const turnText = document.querySelector(".turn");

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

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.textContent !== "") {
         return;
        }

        cell.textContent = currentPlayer;

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        turnText.textContent = `Player ${currentPlayer}'s Turn`;
    });
});