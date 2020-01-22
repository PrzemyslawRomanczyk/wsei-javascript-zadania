document.addEventListener('DOMContentLoaded', function() {
    var type = document.querySelector("#type");
    let visa = new RegExp('^[4]');
    let masterCard = new RegExp('^[5]');
    let americanExpress = new RegExp('^[3][4,7]');
    //
    var name = document.querySelector("#name");

    name.addEventListener("input", function() {
        if (visa.test(name.value)) {
            type.innerText = "Visa";
            if (name.value.length >= 13 && name.value.length <= 16) {
                name.parentElement.style.borderStyle = "solid";
                name.parentElement.style.borderColor = "green";
            } else {
                name.parentElement.style.borderStyle = "none";
            }

        } else if (masterCard.test(name.value)) {
            type.innerText = "Mastercard";

            if (name.value.length == 16) {
                name.parentElement.style.borderStyle = "solid";
                name.parentElement.style.borderColor = "green";
            } else {
                name.parentElement.style.borderStyle = "none";
            }
        } else if (americanExpress.test(name.value)) {
            type.innerText = "American Express";

            if (name.value.length == 15) {
                name.parentElement.style.borderStyle = "solid";
                name.parentElement.style.borderColor = "green";
            } else {
                name.parentElement.style.borderStyle = "none";
            }
        } else {
            type.innerText = "";
            name.parentElement.style.borderStyle = "none";
        }
    });
});