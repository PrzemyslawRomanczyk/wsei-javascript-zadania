function czesc() {
    console.log("Czesc");
}
czesc();
// Funkcja w spodziewany sposób wypisuje "Czesc" w konsoli

czesc();

function czesc() {
    console.log("Czesc");
}
// Funkcja w dalszym ciągu wypisuje "Czesc" w konsoli chociaż napierw wywołujemy funkcję a potem ją deklarujemy

var witaj = function() {
    console.log("Witaj");
}
witaj();
// Funkcja w spodziewany sposób wypisuje "Witaj" w konsoli

witaj();
var witaj = function() {
        console.log("Witaj");
    }
    // Funkcja w dalszym ciągu wypisuje "Witaj" w konsoli chociaż napierw wywołujemy funkcję a potem ją deklarujemy

//W Java Script nie ma różnicy czy najpierw deklarujemy funkcję czy ją wywołujemy