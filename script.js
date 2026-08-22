const cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        console.log("Cell clicked");
    });
});