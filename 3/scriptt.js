document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const searchButton = document.getElementById("searchButton");
    const backButton = document.getElementById("backButton");
    const wordInput = document.getElementById("wordInput");
    const definitionInput = document.getElementById("definitionInput");
    const searchInput = document.getElementById("searchInput");
    const resultContainer = document.getElementById("resultContainer");
    const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

    addButton.addEventListener("click", function() {
        const word = wordInput.value.trim();
        const definition = definitionInput.value.trim();

        if (word && definition) {
            const newRow = dataTable.insertRow();
            newRow.insertCell(0).textContent = word;
            newRow.insertCell(1).textContent = definition;

            wordInput.value = '';
            definitionInput.value = '';
        }
    });

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();
        let count = 0;

        resultContainer.innerHTML = '';

        for (let i = 0; i < dataTable.rows.length; i++) {
            const row = dataTable.rows[i];
            const cell = row.cells[0];
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                count++;
                row.style.display = ""; 
            } else {
                row.style.display = "none"; 
            }
        }

        resultContainer.innerHTML = `Se encontró "${searchTerm}" ${count} veces.`;
    });

    backButton.addEventListener("click", function() {
        searchInput.value = '';
        resultContainer.innerHTML = '';
        for (let i = 0; i < dataTable.rows.length; i++) {
            dataTable.rows[i].style.display = ""; 
        }
    });
});