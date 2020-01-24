document.addEventListener("DOMContentLoaded", function() {
    console.log("Dziala");

    var menuList = document.querySelectorAll(".nav>ul>li");

    console.log(menuList);

    for (var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("mouseover", function() {
            let innerList = this.querySelector("ul");

            if (innerList !== null) {
                innerList.style.display = "block";
            }
        });

        menuList[i].addEventListener("mouseout", function() {
            let innerList = this.querySelector("ul");

            if (innerList !== null) {
                innerList.style.display = "none";
            }
        });
    }

    //Strona działa poprawnie 
});