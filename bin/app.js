document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { id: 1, category: 'Burgers', name: 'Beef Cheese Burger & Chips', price: 45.00 },
        { id: 2, category: 'Burgers', name: 'Double Beef Cheese Burger & Chips', price: 57.00 },
        { id: 3, category: 'Burgers', name: 'Chicken Burger & Chips', price: 42.00 },
        { id: 4, category: 'Burgers', name: 'Beef Burger', price: 32.00 },
        { id: 5, category: 'Chicken', name: 'Full Chicken & Chips', price: 119.00 },
        { id: 6, category: 'Chicken', name: 'Half Chicken & Chips', price: 69.90 },
        { id: 7, category: 'Chicken', name: 'Quarter Chicken & Chips', price: 39.90 },
        { id: 8, category: 'Wings', name: 'Wings (4)', price: 30.00 },
        { id: 9, category: 'Wings', name: 'Wings (8)', price: 56.00 },
        { id: 10, category: 'Wings', name: 'Wings (12)', price: 84.00 },
        { id: 11, category: 'Chips', name: 'Chips', price: 13.00 },
        { id: 12, category: 'Chips', name: 'Chilli Cheese Fries', price: 30.00 },
        { id: 13, category: 'Home Cooked Meals', name: 'Beef Stew & Pap/Rice', price: 56.00 },
        { id: 14, category: 'Home Cooked Meals', name: 'Chicken Stew & Pap/Rice', price: 59.00 },
        { id: 15, category: 'Home Cooked Meals', name: 'Steak & Pap', price: 60.00 },
        { id: 16, category: 'Home Cooked Meals', name: 'Boerewors & Pap', price: 40.00 },
        { id: 17, category: 'Extras', name: 'Rice (Per Serving)', price: 15.00 },
        { id: 18, category: 'Extras', name: 'Pap (Per Serving)', price: 12.00 },
        { id: 19, category: 'Pasta', name: 'Mushroom Pasta', price: 60.00 },
        { id: 20, category: 'Pasta', name: 'Bolognese Pasta', price: 65.00 },
        { id: 21, category: 'Kota', name: 'Kota Prince', price: 29.00 },
        { id: 22, category: 'Kota', name: 'Kota King', price: 42.00 },
        { id: 23, category: 'Toast', name: 'Chicken & Mayo Toast', price: 14.50 },
        { id: 24, category: 'Toast', name: 'Ham & Cheese Toast', price: 13.80 },
        { id: 25, category: 'Toast', name: 'Tomato & Cheese Toast', price: 15.50 },
        { id: 26, category: 'Snacks', name: 'AmaGwinya', price: 3.00 },
        { id: 27, category: 'Snacks', name: 'Russian', price: 13.00 },
        { id: 28, category: 'Snacks', name: 'Boerewors roll', price: 35.00 },
        { id: 29, category: 'Snacks', name: 'Biltong', price: 32.00 },
        { id: 30, category: 'Snacks', name: 'Pop Corn', price: 35.00 },
        { id: 31, category: 'Snacks', name: 'Energy Bar', price: 30.00 },
        { id: 32, category: 'Quickies', name: 'Chips', price: 13.00 },
        { id: 33, category: 'Drinks', name: 'Coffee', price: 21.00 },
        { id: 34, category: 'Drinks', name: 'Ice / Hot Tea', price: 21.00 },
        { id: 35, category: 'Drinks', name: 'Cappuccino', price: 14.00 },
        { id: 36, category: 'Drinks', name: 'Hazelnut', price: 26.99 },
        { id: 37, category: 'Drinks', name: 'Monster', price: 12.00 },
        { id: 38, category: 'Drinks', name: 'RedBull', price: 15.00 },
        { id: 39, category: 'Drinks', name: 'Dragon / Switch', price: 16.00 }
    ];

    const categoryLinks = document.querySelectorAll('.sidebar a');
    const menuCardsContainer = document.querySelector('.menu-cards');

    const renderMenuCards = (category) => {
        menuCardsContainer.innerHTML = '';
        const filteredItems = menuItems.filter(item => item.category.toLowerCase() === category.toLowerCase());

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="src/img/burgers.jpeg" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">R${item.price.toFixed(2)}</p>
                </div>
            `;
            menuCardsContainer.appendChild(card);
        });
    };

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            renderMenuCards(category);
        });
    });

    // Default load (for example, Burgers)
    renderMenuCards('burgers');
});
