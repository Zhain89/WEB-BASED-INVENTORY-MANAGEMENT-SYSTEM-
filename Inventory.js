document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const inventoryList = document.getElementById('inventoryList');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const itemNameInput = document.getElementById('itemName');
        const itemQuantityInput = document.getElementById('itemQuantity');

        const itemName = itemNameInput.value;
        const itemQuantity = parseInt(itemQuantityInput.value);

        if (!itemName || isNaN(itemQuantity) || itemQuantity <= 0) {
            alert('Please enter a valid item name and quantity.');
            return;
        }

        addItemToList(itemName, itemQuantity);

        itemNameInput.value = '';
        itemQuantityInput.value = '';
    });

    function addItemToList(name, quantity) {
        const li = document.createElement('li');
        li.textContent = `${name} - Quantity: ${quantity}`;
        inventoryList.appendChild(li);
    }
});
