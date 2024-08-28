document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');

    let itemCount = 0;

    cartIcon.addEventListener('click', () => {
        itemCount++;
        cartCount.textContent = itemCount;
    });

    // Additional functionality to add items to cart could be added here.
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('customize-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const bagItButtons = document.querySelectorAll('.bag-it-btn');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    let selectedItem = null;

    // Open the modal when "Bag-It" button is clicked
    bagItButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            selectedItem = event.target.closest('li');
            modal.style.display = 'flex';
        });
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle adding the item to the cart
    addToCartBtn.addEventListener('click', () => {
        const quantity = document.getElementById('quantity').value;
        const removeIngredients = Array.from(document.querySelectorAll('#remove-ingredients input:checked')).map(checkbox => checkbox.value);
        const addIngredients = Array.from(document.querySelectorAll('#add-ingredients input:checked')).map(checkbox => checkbox.value);
        const addServiettes = document.querySelector('input[name="serviettes"]:checked') ? true : false;

        // Here you would typically update the cart with the selected options
        console.log('Item:', selectedItem.querySelector('h4').textContent);
        console.log('Quantity:', quantity);
        console.log('Remove Ingredients:', removeIngredients);
        console.log('Add Ingredients:', addIngredients);
        console.log('Add Serviettes:', addServiettes);

        // Update cart count (for demo purposes, you can adjust based on your cart logic)
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + parseInt(quantity);

        // Close the modal
        modal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    let itemCount = 0;

    // Handle adding the item to the cart
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        cartCount.textContent = parseInt(cartCount.textContent) + quantity;
        modal.style.display = 'none';
    });

    // Show modal for customization
    document.querySelectorAll('.bag-it-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('customize-modal').style.display = 'flex';
        });
    });

    // Close modal on click outside or on the close button
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('customize-modal').style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('customize-modal')) {
            document.getElementById('customize-modal').style.display = 'none';
        }
    });
});
