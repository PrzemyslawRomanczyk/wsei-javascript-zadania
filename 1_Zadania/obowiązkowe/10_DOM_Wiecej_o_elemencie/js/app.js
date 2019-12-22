document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Zadanie 0 
    const ex5 = document.getElementsByClassName('ex5')[0];
    const ex5children = ex5.children[1].children;
    for(let i = 0; i <ex5children.length; i++){
        if(i %% 2 == 0){
            ex5children[i].style.backgroundColor="green";
        }
    }


});