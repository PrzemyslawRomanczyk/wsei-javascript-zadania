document.addEventListener("DOMContentLoaded", () => {
    var checkBox = document.getElementById("invoice");
    console.log(checkBox);
    var invoiceDiv = document.getElementById("invoiceData");
    checkBoxChange();

    checkBox.addEventListener("change", () => {
        checkBoxChange();
    })

    function checkBoxChange() {
        if (checkBox.checked == false) {
            invoiceDiv.style.display = "none";
        } else {
            invoiceDiv.style.display = "block";
        }
    }
});