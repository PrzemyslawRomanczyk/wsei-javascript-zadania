const first = document.querySelector(".first").firstElementChild.children[2];
console.log(first);

const second = document.querySelector("#second").parentElement.children[3];
console.log(second);

const grandpa = document.querySelector("[data-ex=third]").parentElement.parentElement;
console.log(grandpa);
const lastChild = grandpa.children[grandpa.children.length - 1];
console.log(lastChild);
const firstChild = lastChild.firstElementChild;
console.log(firstChild);
const middleChild = firstChild.children[Math.floor(firstChild.children.length / 2)];
console.log(middleChild);

const forth = document.querySelector("div.forth").parentElement.querySelector("article").querySelectorAll("p")[1];
console.log(forth);