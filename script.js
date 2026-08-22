const cells = document.querySelectorAll(".cell");
const turnText = document.querySelector(".turn");

let currentPlayer = "X";

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