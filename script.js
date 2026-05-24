// Food data
const foodData = {
    'idly': {
        name: 'Idly',
        calories: 60,
        sodium: 120,
        protein: 2,
        carbs: 13,
        fat: 0.2,
        type: 'good'
    },
    'dosa': {
        name: 'Dosa',
        calories: 175,
        sodium: 250,
        protein: 3,
        carbs: 20,
        fat: 9,
        type: 'ok'
    },
    'samosa': {
        name: 'Samosa',
        calories: 262,
        sodium: 400,
        protein: 4,
        carbs: 32,
        fat: 14,
        type: 'bad'
    },
    'vada': {
        name: 'Vada',
        calories: 280,
        sodium: 350,
        protein: 8,
        carbs: 28,
        fat: 16,
        type: 'bad'
    },
    'uttapam': {
        name: 'Uttapam',
        calories: 120,
        sodium: 180,
        protein: 4,
        carbs: 15,
        fat: 4,
        type: 'good'
    },
    'rasam': {
        name: 'Rasam',
        calories: 45,
        sodium: 500,
        protein: 2,
        carbs: 8,
        fat: 1,
        type: 'ok'
    },
    'noodles': {
        name: 'Instant Noodles',
        calories: 380,
        sodium: 1200,
        protein: 9,
        carbs: 54,
        fat: 14,
        type: 'bad'
    },
    'fried rice': {
        name: 'Fried Rice',
        calories: 240,
        sodium: 700,
        protein: 6,
        carbs: 30,
        fat: 10,
        type: 'bad'
    },
    'spring roll': {
        name: 'Spring Roll',
        calories: 156,
        sodium: 400,
        protein: 3,
        carbs: 21,
        fat: 7,
        type: 'ok'
    },
    'pizza': {
        name: 'Pizza',
        calories: 285,
        sodium: 800,
        protein: 12,
        carbs: 36,
        fat: 10,
        type: 'bad'
    },
    'pasta': {
        name: 'Pasta',
        calories: 220,
        sodium: 300,
        protein: 8,
        carbs: 43,
        fat: 1,
        type: 'ok'
    },
    'maggie': {
        name: 'Maggie Noodles',
        calories: 379,
        sodium: 1300,
        protein: 10,
        carbs: 52,
        fat: 15,
        type: 'bad'
    },
    'coca cola': {
        name: 'Coca Cola',
        calories: 140,
        sodium: 55,
        protein: 0,
        carbs: 39,
        fat: 0,
        type: 'bad'
    },
    'sprite': {
        name: 'Sprite',
        calories: 140,
        sodium: 65,
        protein: 0,
        carbs: 38,
        fat: 0,
        type: 'bad'
    },
    'biryani': {
        name: 'Biryani',
        calories: 420,
        sodium: 600,
        protein: 18,
        carbs: 45,
        fat: 18,
        type: 'ok'
    },
    'butter chicken': {
        name: 'Butter Chicken',
        calories: 280,
        sodium: 620,
        protein: 28,
        carbs: 6,
        fat: 16,
        type: 'ok'
    },
    'naan': {
        name: 'Naan',
        calories: 280,
        sodium: 400,
        protein: 8,
        carbs: 48,
        fat: 6,
        type: 'ok'
    },
    'dal makhani': {
        name: 'Dal Makhani',
        calories: 220,
        sodium: 480,
        protein: 12,
        carbs: 18,
        fat: 12,
        type: 'ok'
    },
    'paneer tikka': {
        name: 'Paneer Tikka',
        calories: 180,
        sodium: 350,
        protein: 16,
        carbs: 8,
        fat: 10,
        type: 'ok'
    },
    'sushi': {
        name: 'Sushi',
        calories: 140,
        sodium: 300,
        protein: 6,
        carbs: 28,
        fat: 0.5,
        type: 'good'
    },
    'ramen': {
        name: 'Ramen',
        calories: 356,
        sodium: 1680,
        protein: 12,
        carbs: 52,
        fat: 10,
        type: 'bad'
    },
    'tempura': {
        name: 'Tempura',
        calories: 270,
        sodium: 450,
        protein: 8,
        carbs: 32,
        fat: 12,
        type: 'ok'
    },
    'miso soup': {
        name: 'Miso Soup',
        calories: 45,
        sodium: 700,
        protein: 3,
        carbs: 4,
        fat: 1,
        type: 'good'
    },
    'kimchi': {
        name: 'Kimchi',
        calories: 23,
        sodium: 380,
        protein: 1.2,
        carbs: 4,
        fat: 0.1,
        type: 'good'
    },
    'bibimbap': {
        name: 'Bibimbap',
        calories: 434,
        sodium: 700,
        protein: 16,
        carbs: 54,
        fat: 18,
        type: 'ok'
    },
    'bulgogi': {
        name: 'Bulgogi',
        calories: 280,
        sodium: 450,
        protein: 24,
        carbs: 8,
        fat: 16,
        type: 'ok'
    },
    'korean bbq': {
        name: 'Korean BBQ',
        calories: 320,
        sodium: 600,
        protein: 32,
        carbs: 4,
        fat: 20,
        type: 'ok'
    },
    'tteokbokki': {
        name: 'Tteokbokki',
        calories: 180,
        sodium: 500,
        protein: 4,
        carbs: 32,
        fat: 4,
        type: 'ok'
    }
};

// Theme toggle
function toggleTheme() {
    let body = document.body;
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
window.addEventListener('load', function() {
    let theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
});

// Food categories
const foodsByType = {
    'south': ['idly', 'dosa', 'samosa', 'vada', 'uttapam', 'rasam'],
    'north': ['biryani', 'butter chicken', 'naan', 'dal makhani', 'paneer tikka'],
    'chinese': ['noodles', 'fried rice', 'spring roll'],
    'japanese': ['sushi', 'ramen', 'tempura', 'miso soup'],
    'korean': ['kimchi', 'bibimbap', 'bulgogi', 'korean bbq', 'tteokbokki'],
    'italian': ['pizza', 'pasta']
};

// Cuisine titles
const cuisineTitles = {
    'south': 'SOUTH INDIAN FOODS',
    'north': 'NORTH INDIAN FOODS',
    'chinese': 'CHINESE FOODS',
    'japanese': 'JAPANESE FOODS',
    'korean': 'KOREAN FOODS',
    'italian': 'ITALIAN FOODS'
};

// Get background image URL for a food item
function getFoodImageUrl(foodKey) {
    let imageName = foodKey.toLowerCase().replace(/ /g, '_');
    return `./${imageName}.png`;
}

function cardUp(card) {
    card.style.transform = 'translateY(-10px)';
}

function cardDown(card) {
    card.style.transform = 'translateY(0)';
}

// Show food details in modal
function showFood(foodName) {
    let food = foodData[foodName];
    if (!food) return;

    let healthClass = food.type === 'good' ? 'healthy' : (food.type === 'ok' ? 'moderate' : 'unhealthy');
    let healthText = food.type === 'good' ? 'GOOD' : (food.type === 'ok' ? 'OKAY' : 'BAD');
    
    let html = `
        <div class="nutrition-box">
            <p><strong>Calories:</strong> ${food.calories} cal</p>
            <p><strong>Sodium:</strong> ${food.sodium} mg</p>
            <p><strong>Protein:</strong> ${food.protein}g</p>
            <p><strong>Carbs:</strong> ${food.carbs}g</p>
            <p><strong>Fat:</strong> ${food.fat}g</p>
        </div>

        <div class="meter">
            <div class="meter-label">
                <span>Health Score</span>
            </div>
            <div class="meter-bar">
                <div class="meter-fill ${healthClass}">${healthText}</div>
            </div>
        </div>
    `;

    document.getElementById('foodName').textContent = food.name;
    document.getElementById('foodDetails').innerHTML = html;
    document.getElementById('modal').classList.add('show');
}

// Close modal
function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Search food from home page
function analyzeFood() {
    let search = document.getElementById('foodSearch').value.toLowerCase().trim();
    if (search === '') {
        alert('Please enter food name');
        return;
    }
    
    if (foodData[search]) {
        showFood(search);
    } else {
        alert('Food not found. Try: idly, dosa, pizza, noodles, etc.');
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    let modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.getElementById('foodSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                analyzeFood();
            }
        });
    }
    
    let productSearch = document.getElementById('productSearch');
    if (productSearch) {
        productSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (typeof searchProduct === 'function') searchProduct();
            }
        });
    }
});
