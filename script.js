totalPrice = 0;

function addItem(form) {
    const itemName = form.item_name.value;
    const itemPrice = form.item_price.value;
    const totalPriceElement = document.getElementById("total_price");
    totalPrice += parseInt(itemPrice);

    totalPriceElement.innerText = `Total price of items in your cart: $${totalPrice}`;

    return false
}