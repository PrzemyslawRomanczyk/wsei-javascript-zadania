document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    ///Zadanie 0 ////////////////////////////////////////////
    const klasa = document.querySelector("div .title");
    const getDataAnimation = function(element){
        return element.getAttribute("data-animation");
    }
    console.log(getDataAnimation(klasa));

    ///Zadanie 1 ////////////////////////////////////////////

    const element = document.getElementById("home");
    console.log(element);
    const element2 = document.querySelector("#home");
    console.log(element2);

    const element3 = document.querySelector("li");
    const element4 = element3.getAttribute("data-direction")
    console.log(element4);

    const element5 = document.querySelector(".block");
    console.log(element5);

    ///Zadanie 2 ////////////////////////////////////////////
    const element6 = document.querySelectorAll("nav li");
    console.log(element6);
    console.log(element6.length);
    const element7 = document.querySelectorAll("div p");
    console.log(element7);
    console.log(element7.length);
    const element8 = document.querySelectorAll("article div");
    console.log(element8);
    console.log(element8.length);

    ///Zadanie 3 ////////////////////////////////////////////
    const element9 = document.querySelector("article.first");
    let result = element9.getElementsByTagName("h1")
    console.log(result.length);
});
