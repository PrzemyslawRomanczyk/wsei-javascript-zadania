document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");

    var prev = document.getElementById("prevPicture");
    var next = document.getElementById("nextPicture");
    var list = document.querySelectorAll(".slider ul li");
    var index = 0;
    console.log(prev);
    console.log(next);
    console.log(list);
    console.log(index);

    list[index].classList.add("visible");

    prev.addEventListener("click", function() {
        console.log("kliknięto: prev");
        list[index].classList.remove("visible");
        index--;

        if (index < 0) {
            index = list.length - 1;
        }

        list[index].classList.add("visible");
    });

    next.addEventListener("click", function() {
        console.log("kliknięto: next");

        list[index].classList.remove("visible");
        index++;

        if (index >= list.length) {
            index = 0;
        }

        list[index].classList.add("visible");
    });

    // Punkt 7
    // Jeśli będąć na pierwszym elemencie klikniemy "next" wyświetli sie pusta strona
    // Jeśli będąć na ostatnim elemencie klikniemy "next" wyświetli sie pusta strona
    // Dzieje się tak gdyż po kliknięciu przycisku próbujemy ustawić klasę visible dla obrazka który nie istnieje
});