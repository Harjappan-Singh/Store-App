const totalPriceElement = document.getElementById("total_price");
const parentListElement = document.getElementById("list")
totalPrice = 0;

function addItem(form) {
    const itemName = form.item_name.value;
    const itemPrice = form.item_price.value;

    totalPrice += parseInt(itemPrice);
    totalPriceElement.innerText = `Total price of items in your cart: ${totalPrice} INR`;

    const listElement = document.createElement("li");
    const listTextNode = document.createTextNode(`${itemName} - ${itemPrice} INR`);
    listElement.classList.add("list-group-item", "d-flex", "justify-content-between");
    listElement.appendChild(listTextNode);
    parentListElement.appendChild(listElement);

    const removeButton = document.createElement("button");
    const removeButtonTextNode = document.createTextNode("Remove");
    removeButton.classList.add("btn", "btn-danger");
    removeButton.appendChild(removeButtonTextNode);
    listElement.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
        listElement.remove();
        totalPrice -= parseInt(itemPrice);
        totalPriceElement.innerText = `Total price of items in your cart: ${totalPrice} INR`;
    });

    return false
}