document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Zadanie 0 

    function getDatasInfo(elements){
         let tab = [];
         for(let i = 0; i <= elements.length; i++){
             tab.push(elements[i].getAttribute('data-color'));
         }
         console.log(tab);
         return tab;
    }
    getDatasInfo(links);
    //Zadanie 1 
    console.log("Zadanie 1 ");
    console.log(childElements);
    console.log(blocks);
    console.log(links);
    console.log(banner);
    console.log(homeElement);

    for(let i = 0; i<childElements.length; i++){
        console.log(childElements[i].tagName);
        console.log(childElements[i].classList);
    }
    for(let i = 0; i<blocks.length; i++){
        console.log(blocks[i].tagName);
        console.log(blocks[i].classList);
    }
    for(let i = 0; i<links.length; i++){
        console.log(links[i].tagName);
        console.log(links[i].classList);
    }
    //Zadanie 2 

    console.log("Zadanie 2 ");
    for(let i = 0; i<blocks.length; i++){
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
        blocks[i].innerHTML = "Nowa wartość diva w klasie blocks";
    }    
    //Zadanie 3 

    console.log("Zadanie 3");

    var mainFooter = document.getElementById("mainFooter");

    function getId(element){
        return element.id;
    }
    console.log(getId(mainFooter));
    //zadanie 4 

    console.log("Zadanie 4");
    function getTags(elements){
        let arr =[];

        for(let i = 0; i < elements.length; i++){
            arr.push(elements[i].tagName)
        }
        return arr;
    }
    console.log(getTags(childElements));
    //Zadanie 5 

    console.log("Zadanie 5");
    function getClassInfo(element){
        let arr = [];
        for(let i = 0; i < element.classList.length; i++){
            arr.push(element.classList[i]);
        }
        return arr;
    }
    console.log(getClassInfo(banner));
    //Zadanie 6 
    console.log("Zadanie 6");
    function setDataDirection(elements){
        for(let i = 0; i < elements.length; i++){
            if(elements[i].getAttribute('data-direction')){
                elements[i].setAttribute('data-direction', 'top');
            }
        }
    }
    var objects = document.querySelectorAll('nav li');
    setDataDirection(objects);
});
