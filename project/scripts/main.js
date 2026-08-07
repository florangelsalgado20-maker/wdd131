// ===== Plant Data (Objects + Arrays) =====
const plants = [
    {
        id: 'snake-plant',
        name: 'Snake Plant',
        scientific: 'Sansevieria trifasciata',
        image: 'images/snake-plant.jpg',
        description: 'The Snake Plant is one of the most forgiving houseplants. Its upright, sword-like leaves add architectural interest to any room.',
        light: 'Low to Bright Indirect',
        water: 'Every 2-3 weeks',
        difficulty: 'Very Easy',
        tips: 'Let soil dry completely between waterings. Tolerates neglect well.'
    },
    {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        scientific: 'Epipremnum aureum',
        image: 'images/golden-pothos.jpg',
        description: 'A fast-growing trailing plant with beautiful heart-shaped leaves. Perfect for shelves or hanging baskets.',
        light: 'Low to Bright Indirect',
        water: 'When top inch is dry',
        difficulty: 'Easy',
        tips: 'Drooping leaves mean it is thirsty. Cut vines to encourage bushier growth.'
    },
    {
        id: 'zz-plant',
        name: 'ZZ Plant',
        scientific: 'Zamioculcas zamiifolia',
        image: 'images/zz-plant.jpg',
        description: 'The ZZ Plant has glossy, dark green leaves that look almost fake. It is practically indestructible.',
        light: 'Low to Bright Indirect',
        water: 'Every 3-4 weeks',
        difficulty: 'Very Easy',
        tips: 'Stores water in its rhizomes, so underwatering is better than overwatering.'
    }
];

const dailyTips = [
    'Check your plants\' soil moisture by sticking your finger 1 inch into the soil.',
    'Dust your plant leaves monthly to help them photosynthesize better.',
    'Rotate your plants occasionally so they grow evenly toward the light.',
    'Yellow leaves often mean overwatering—let the soil dry out!',
    'Brown leaf tips can indicate low humidity or fluoride in water.',
    'Most houseplants prefer temperatures between 65-75°F (18-24°C).'
];

// ===== Function 1: Load plant cards =====
function loadPlantCards() {
    const container = document.getElementById('plants-overview');
    if (!container) return;

    let html = '';
    plants.forEach(plant => {
        html += `
            <article class="card">
                <img src="${plant.image}" alt="${plant.name}" loading="lazy">
                <div class="card-body">
                    <h3>${plant.name}</h3>
                    <p><em>${plant.scientific}</em></p>
                    <p>${plant.description}</p>
                </div>
            </article>
        `;
    });
    container.innerHTML = html;
}

// ===== Function 2: Populate dropdown =====
function populateDropdown() {
