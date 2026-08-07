// Product Array Data Source - Plantas de Leafy Living
const products = [
    { id: 'snake-plant', name: 'Snake Plant (Sansevieria)' },
    { id: 'golden-pothos', name: 'Golden Pothos' },
    { id: 'zz-plant', name: 'ZZ Plant' }
];

// Llena el menú con el array: id = value, name = texto visible
const productSelect = document.getElementById('product');
products.forEach((product) => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Al elegir una planta, se ilumina su foto en la galería
productSelect.addEventListener('change', () => {
    document.querySelectorAll('.plant-card').forEach((card) => {
        card.classList.remove('selected');
    });
    const selectedCard = document.getElementById('card-' + productSelect.value);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
});
