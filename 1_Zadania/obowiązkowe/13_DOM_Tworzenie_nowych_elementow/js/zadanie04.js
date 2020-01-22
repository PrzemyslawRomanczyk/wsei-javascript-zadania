document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("remove").onclick = function() {
        const list = document.querySelector("ul.list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
});