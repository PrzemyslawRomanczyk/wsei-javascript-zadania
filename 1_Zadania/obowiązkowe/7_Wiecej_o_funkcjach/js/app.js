/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Deklarcja funkcji jeden
function jeden() {

    //Deklaracja zmiennej lokalnej
    var zmienna1 = 1;

    //Deklaracja funkcji dwa
    function dwa() {

        //Wypisanie zmiennej z funkcji numer jeden, funkcja dwa może mieć dostęp do tej zmiennej
        // ponieważ jest zdefiniowana wewnątrz funkcji jeden
        console.log(zmienna1);

        //definicja zmiennej lokalnej dla funkcji dwa
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa
    dwa();

    //wypisanie zmiennej2 zadeklarowanej w funkcji dwa, funkcja jeden nie ma dostępu do tej zmiennej
    // ponieważ jest to zmienna lokalna funkcji dwa i nie została ona zwrócona przez funkcję dwa
    console.log(zmienna2)
}

//wywołanie funkcji jeden
jeden()