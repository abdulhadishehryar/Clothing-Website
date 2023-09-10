function decreaseQuantity(inputId) {
    var quantityInput = document.getElementById(inputId);
    var currentQuantity = parseInt(quantityInput.value);

    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function increaseQuantity(inputId) {
    var quantityInput = document.getElementById(inputId);
    var currentQuantity = parseInt(quantityInput.value);

    quantityInput.value = currentQuantity + 1;
}