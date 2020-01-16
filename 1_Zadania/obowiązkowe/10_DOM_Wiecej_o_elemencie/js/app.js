document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Zadanie 0 
    const ex5 = document.getElementsByClassName('ex5')[0];
    const ex5children = ex5.children[1].children;
    for (let i = 0; i < ex5children.length; i++) {
        if (i % 2 == 0) {
            ex5children[i].style.backgroundColor = "green";
        }
    }

    ex5children[4].className = "big";

    for (let i = 0; i < ex5children.length; i++) {
        if (i % 3 == 0) {
            ex5children[i].style.textDecoration = "underline";
        }
    }
    //Zadanie 1 
    const ex1 = document.getElementsByClassName('ex1')[1];
    const chrome = ex1.getElementsByClassName("chrome")[0];
    chrome.style.width = "100px";
    ex1.querySelectorAll("a")[0].text = "Chrome";

    const firefox = ex1.getElementsByClassName("firefox")[0];
    //firefox.style.backgroundImage = "url('../assets/img/firefox.png')"
    firefox.href = "https://www.mozilla.org/pl/firefox/new/";
    ex1.querySelectorAll("a")[1].text = "Firefox";

    const edge = ex1.getElementsByClassName("edge")[0];
    //edge.style.backgroundImage = "url('../assets/img/edge.png')"
    firefox.href = "https://www.microsoft.com/en-us/edge";
    ex1.querySelectorAll("a")[2].text = "Edge";

    //Zadanie 2 
    const ex2 = document.getElementsByClassName('ex2')[0];
    const list = ex2.querySelectorAll("li");
    console.log(list);
    list[0].innerHTML = "Imie i nazwisko: Przemysław Romańczyk";
    list[1].innerHTML = "Ulubiony kolor: czarny";
    list[2].innerHTML = "Ulubiona potrawa: Chilli Con Carne";

    //Zadanie 3 
    const ex3 = document.getElementsByClassName('ex3')[0];
    ex3.querySelector("ul").className = "menu";
    console.log(ex3.querySelector("ul"));
    listMenu = ex3.querySelectorAll("li");

    for (let i = 0; i < listMenu.length; i++) {
        listMenu[i].classList.add("menuElement");
    }
    console.log(ex3.querySelectorAll("li"));

    for (let i = 0; i < listMenu.length; i++) {
        listMenu[i].classList.remove("error");
    }
    console.log(ex3.querySelectorAll("li"));

    //Zadanie 4 
    const ex4 = document.getElementsByClassName('ex4')[0];
    listId = ex4.querySelectorAll("li");
    console.log(listId);

    for (let i = 0; i < listId.length; i++) {
        listMenu[i].setAttribute("data-id", i + 1);
        console.log(listMenu[i].getAttribute("data-id"));
    }
    console.log(ex4.querySelectorAll("li"));

});