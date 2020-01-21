var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

window.addEventListener('DOMContentLoaded', () => {
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})

// querySelector nie znajdzie elementów w momencie uruchomienia kodu ponieważ nie pojawiły się jeszcze w DOMie