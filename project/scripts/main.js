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

// Daily tips array
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
    const select = document.getElementById('plant-select');
    if (!select) return;

    plants.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant.id;
        option.textContent = plant.name;
        select.appendChild(option);
    });
}

// ===== Function 3: Show plant details (uses conditional branching) =====
function showPlantDetails(plantId) {
    const detailsContainer = document.getElementById('plant-details');
    if (!detailsContainer) return;

    if (!plantId) {
        detailsContainer.innerHTML = '<p><em>Select a plant from the dropdown to see its care guide.</em></p>';
        return;
    }

    const plant = plants.find(p => p.id === plantId);
    
    if (!plant) {
        detailsContainer.innerHTML = '<p>Plant not found.</p>';
        return;
    }

    // Conditional branching for difficulty level
    let difficultyColor = '';
    if (plant.difficulty === 'Very Easy') {
        difficultyColor = '#2E5A36';
    } else if (plant.difficulty === 'Easy') {
        difficultyColor = '#8B5A2B';
    } else {
        difficultyColor = '#C0392B';
    }

    const html = `
        <h3>${plant.name} <em>(${plant.scientific})</em></h3>
        <p>${plant.description}</p>
        <div class="care-grid">
            <div class="care-item">
                <strong>☀️ Light</strong>
                <span>${plant.light}</span>
            </div>
            <div class="care-item">
                <strong>💧 Water</strong>
                <span>${plant.water}</span>
            </div>
            <div class="care-item">
                <strong>📊 Difficulty</strong>
                <span style="color: ${difficultyColor}; font-weight: bold;">${plant.difficulty}</span>
            </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 Pro Tip:</strong> ${plant.tips}</p>
    `;
    detailsContainer.innerHTML = html;

    // Save to localStorage
    localStorage.setItem('lastViewedPlant', plant.name);
}

// ===== Function 4: Show daily tip =====
function showDailyTip() {
    const tipContainer = document.getElementById('daily-tip');
    if (!tipContainer) return;

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const tipIndex = dayOfYear % dailyTips.length;
    tipContainer.innerHTML = `<strong>Today's Tip:</strong> ${dailyTips[tipIndex]}`;
}

// ===== Function 5: Handle form submission =====
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const feedback = document.getElementById('form-feedback');
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const topic = form.topic.value;
    const message = form.message.value.trim();

    // Conditional branching for validation
    if (!name || !email || !topic || !message) {
        feedback.className = 'form-feedback';
        feedback.style.cssText = 'background: #f8d7da; color: #721c24; display: block; padding: 1rem; border-radius: 6px; margin-top: 1rem;';
        feedback.textContent = 'Please fill in all required fields.';
        return;
    }

    // Email validation with conditional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.style.cssText = 'background: #f8d7da; color: #721c24; display: block; padding: 1rem; border-radius: 6px; margin-top: 1rem;';
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    // Save message to localStorage using array
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const newMessage = {
        name: name,
        email: email,
        topic: topic,
        message: message,
        timestamp: new Date().toISOString()
    };
    savedMessages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(savedMessages));

    // Show success using template literals
    feedback.className = 'form-feedback success';
    feedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your message about "${topic}" has been received. We'll get back to you at ${email} soon.`;
    
    form.reset();
}

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    // Track visits using localStorage
    const visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
    localStorage.setItem('visitCount', visitCount);
    console.log(`Welcome! You have visited ${visitCount} time(s).`);

    // Initialize plant guide page
    if (document.getElementById('plant-select')) {
        populateDropdown();
        loadPlantCards();
        showDailyTip();

        // Event listener for dropdown
        document.getElementById('plant-select').addEventListener('change', (e) => {
            showPlantDetails(e.target.value);
        });

        // Show last viewed plant if exists
        const lastViewed = localStorage.getItem('lastViewedPlant');
        if (lastViewed) {
            console.log(`Last viewed: ${lastViewed}`);
        }
    }

    // Initialize contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});
