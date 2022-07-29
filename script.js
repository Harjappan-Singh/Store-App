const totalPriceElement = document.getElementById("total_price");
const parentListElement = document.getElementById("list")
let totalPrice = 0;
let cart = [];

class Item {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

function refreshUI() {
    totalPriceElement.innerText = `Total price of items in your cart: ${totalPrice} INR`;
    parentListElement.innerHTML = ""

    cart.forEach((item, index) => {
        const listElement = document.createElement("li");
        const listTextNode = document.createTextNode(`${item.name} - ${item.price} INR`);
        listElement.classList.add("list-group-item", "d-flex", "justify-content-between");
        listElement.appendChild(listTextNode);
        parentListElement.appendChild(listElement);

        const removeButton = document.createElement("button");
        const removeButtonTextNode = document.createTextNode("Remove");
        removeButton.classList.add("btn", "btn-danger");
        removeButton.appendChild(removeButtonTextNode);
        listElement.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            cart.splice(index, 1)
            totalPrice -= item.price;
            refreshUI();
        });
    });

}

function addItem(form) {
    const itemName = form.item_name.value;
    const itemPrice = form.item_price.value;

    totalPrice += parseInt(itemPrice);
    const item = new Item(itemName, parseInt(itemPrice));
    cart.push(item);

    refreshUI();

    return false
}