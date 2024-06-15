const dishes = [
    { name: "Classic Hamburger", ingredients: "Ingredients: Beef, Lettuce, Tomato, Bun. Price: $10", image: "pictures/hamb.webp" },
    { name: "Pasta", ingredients: "Ingredients: Spaghetti, Marinara Sauce, Basil. Price: $12", image: "pictures/pasta.webp" },
    { name: "Mixed Veggies", ingredients: "Ingredients: Broccoli, Carrots, Bell Peppers. Price: $8", image: "pictures/veggies.webp" },
    { name: "Grilled Chicken", ingredients: "Ingredients: Chicken, Spices, Lemon. Price: $15", image: "pictures/chicken.webp" },
    { name: "Caesar Salad", ingredients: "Ingredients: Romaine, Caesar Dressing, Croutons. Price: $9", image: "pictures/salad.webp" },
    { name: "Steak", ingredients: "Ingredients: Beef, Spices. Price: $20", image: "pictures/steak.webp" }
];

let currentIndex = 0;

function updateDish() {
    const dishName = document.getElementById('dish-name');
    const hoverInfo = document.getElementById('hover-info');
    const dishImage = document.getElementById('dish-image');
    const dots = document.getElementById('dots');

    dishName.textContent = dishes[currentIndex].name;
    hoverInfo.textContent = dishes[currentIndex].ingredients;
    dishImage.src = dishes[currentIndex].image;

    // Update dots
    dots.innerHTML = '';
    for (let i = 0; i < dishes.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === currentIndex ? ' active' : '');
        dots.appendChild(dot);
    }
}
function fadeOut(element, callback) {
    element.style.opacity = 0;
    setTimeout(callback, 500); // Match the transition duration
}

function fadeIn(element) {
    element.style.opacity = 1;
}

function prevDish() {
    fadeOut(document.querySelector('.menu-item img'), () => {
        currentIndex = (currentIndex === 0) ? dishes.length - 1 : currentIndex - 1;
        updateDish();
        fadeIn(document.querySelector('.menu-item img'));
    });
    fadeOut(document.querySelector('.menu-item span'), () => {
        fadeIn(document.querySelector('.menu-item span'));
    });
}

function nextDish() {
    fadeOut(document.querySelector('.menu-item img'), () => {
        currentIndex = (currentIndex === dishes.length - 1) ? 0 : currentIndex + 1;
        updateDish();
        fadeIn(document.querySelector('.menu-item img'));
    });
    fadeOut(document.querySelector('.menu-item span'), () => {
        fadeIn(document.querySelector('.menu-item span'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateDish();
});
