/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Dziala");

    var tooltips = document.getElementsByClassName("tooltip");

    console.log(tooltips);

    var tooltipText = document.createElement("span");
    tooltipText.className = "tooltipText";

    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function() {
            tooltipText.innerText = this.dataset.text;
            this.appendChild(tooltipText);

            console.log(this.dataset.text);
        });

        tooltips[i].addEventListener("mouseout", function() {
            tooltipText.remove();

            console.log(this.dataset.text);
        });
    }

    // strona działa poprawnie
});