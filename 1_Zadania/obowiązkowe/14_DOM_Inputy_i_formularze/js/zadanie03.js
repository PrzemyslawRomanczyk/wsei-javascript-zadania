document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector("form");
    var table = document.querySelector("tbody");

    var team1 = document.querySelector("#team1");
    var points1 = document.querySelector("#points1");
    var team2 = document.querySelector("#team2");
    var points2 = document.querySelector("#points2");


    form.addEventListener("submit", function(event) {

        event.preventDefault();
        if (points2.value.includes("-") || points1.value.includes("-") || team2.value == team1.value) {
            alert("Niepoprawne dane !");

        } else {
            var tr = document.createElement("tr");
            var td = null;

            td = document.createElement("td");
            td.innerText = team1.value;
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = team2.value;
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = points1.value + " - " + points2.value;
            tr.appendChild(td);

            table.appendChild(tr)

        }

    });
});