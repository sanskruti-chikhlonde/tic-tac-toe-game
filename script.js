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

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.textContent !== "") {
         return;
        }

        cell.textContent = currentPlayer;

        let winner = checkWinner();

        if (winner) {
           console.log(`${winner} wins!`);
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