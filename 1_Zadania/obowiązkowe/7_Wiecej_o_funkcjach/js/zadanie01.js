/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji sortArray
function sortArray() {

    //deklaracja tablicy liczb points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie metody bibliotecznej sort dla tablicy points, do sortowania zostanie użyta funkcja 
    points.sort(function(a, b) {
        //deklaracja funkcji uzytej przy sorotwaniu
        return a - b;
    });

    //Zwrócenie tablicy points posortowanej według defaultowego słownikowego algorytmu 
    return points;
}

//wywołanie funkcji sortArray
sortArray();