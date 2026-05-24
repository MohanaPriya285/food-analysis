// ======================== FOOD DATA ========================
const foodData = {
    'idly': { name: 'Idly', calories: 60, sodium: 120, protein: 2, carbs: 13, fat: 0.2, type: 'good' },
    'dosa': { name: 'Dosa', calories: 175, sodium: 250, protein: 3, carbs: 20, fat: 9, type: 'ok' },
    'samosa': { name: 'Samosa', calories: 262, sodium: 400, protein: 4, carbs: 32, fat: 14, type: 'bad' },
    'vada': { name: 'Vada', calories: 280, sodium: 350, protein: 8, carbs: 28, fat: 16, type: 'bad' },
    'uttapam': { name: 'Uttapam', calories: 120, sodium: 180, protein: 4, carbs: 15, fat: 4, type: 'good' },
    'rasam': { name: 'Rasam', calories: 45, sodium: 500, protein: 2, carbs: 8, fat: 1, type: 'ok' },
    'noodles': { name: 'Instant Noodles', calories: 380, sodium: 1200, protein: 9, carbs: 54, fat: 14, type: 'bad' },
    'fried rice': { name: 'Fried Rice', calories: 240, sodium: 700, protein: 6, carbs: 30, fat: 10, type: 'bad' },
    'spring roll': { name: 'Spring Roll', calories: 156, sodium: 400, protein: 3, carbs: 21, fat: 7, type: 'ok' },
    'pizza': { name: 'Pizza', calories: 285, sodium: 800, protein: 12, carbs: 36, fat: 10, type: 'bad' },
    'pasta': { name: 'Pasta', calories: 220, sodium: 300, protein: 8, carbs: 43, fat: 1, type: 'ok' },
    'maggie': { name: 'Maggie Noodles', calories: 379, sodium: 1300, protein: 10, carbs: 52, fat: 15, type: 'bad' },
    'coca cola': { name: 'Coca Cola', calories: 140, sodium: 55, protein: 0, carbs: 39, fat: 0, type: 'bad' },
    'sprite': { name: 'Sprite', calories: 140, sodium: 65, protein: 0, carbs: 38, fat: 0, type: 'bad' },
    'biryani': { name: 'Biryani', calories: 420, sodium: 600, protein: 18, carbs: 45, fat: 18, type: 'ok' },
    'butter chicken': { name: 'Butter Chicken', calories: 280, sodium: 620, protein: 28, carbs: 6, fat: 16, type: 'ok' },
    'naan': { name: 'Naan', calories: 280, sodium: 400, protein: 8, carbs: 48, fat: 6, type: 'ok' },
    'dal makhani': { name: 'Dal Makhani', calories: 220, sodium: 480, protein: 12, carbs: 18, fat: 12, type: 'ok' },
    'paneer tikka': { name: 'Paneer Tikka', calories: 180, sodium: 350, protein: 16, carbs: 8, fat: 10, type: 'ok' },
    'sushi': { name: 'Sushi', calories: 140, sodium: 300, protein: 6, carbs: 28, fat: 0.5, type: 'good' },
    'ramen': { name: 'Ramen', calories: 356, sodium: 1680, protein: 12, carbs: 52, fat: 10, type: 'bad' },
    'tempura': { name: 'Tempura', calories: 270, sodium: 450, protein: 8, carbs: 32, fat: 12, type: 'ok' },
    'miso soup': { name: 'Miso Soup', calories: 45, sodium: 700, protein: 3, carbs: 4, fat: 1, type: 'good' },
    'kimchi': { name: 'Kimchi', calories: 23, sodium: 380, protein: 1.2, carbs: 4, fat: 0.1, type: 'good' },
    'bibimbap': { name: 'Bibimbap', calories: 434, sodium: 700, protein: 16, carbs: 54, fat: 18, type: 'ok' },
    'bulgogi': { name: 'Bulgogi', calories: 280, sodium: 450, protein: 24, carbs: 8, fat: 16, type: 'ok' },
    'korean bbq': { name: 'Korean BBQ', calories: 320, sodium: 600, protein: 32, carbs: 4, fat: 20, type: 'ok' },
    'tteokbokki': { name: 'Tteokbokki', calories: 180, sodium: 500, protein: 4, carbs: 32, fat: 4, type: 'ok' }
};

// ======================== IMAGE MAPPING ========================
const productImages = {
    'idly': 'idly.png',
    'dosa': 'dosa.png',
    'samosa': 'samosa.png',
    'vada': 'vada.png',
    'uttapam': 'uttapam.png',
    'rasam': 'rasam.png',
    'noodles': 'noodles.png',
    'fried rice': 'fried_rice.png',
    'spring roll': 'spring_roll.png',
    'pizza': 'pizza.png',
    'pasta': 'pasta.png',
    'maggie': 'maggie.png',
    'coca cola': 'coca_cola.png',
    'sprite': 'sprite.png',
    'biryani': 'chicken_briyani.png',
    'butter chicken': 'butter_chicken.png',
    'naan': 'naan.png',
    'dal makhani': 'dal_makhani.png',
    'paneer tikka': 'paneer_tikka.png',
    'sushi': 'sushi.png',
    'ramen': 'ramen.png',
    'tempura': 'tempura.png',
    'miso soup': 'miso_soup.png',
    'kimchi': 'kimchi.png',
    'bibimbap': 'bibimbap.png',
    'bulgogi': 'bulgogi.png',
    'korean bbq': 'korean_bbq.png',
    'tteokbokki': 'tteokbokki.png'
};

// ======================== FOOD CATEGORIES & TITLES ========================
const foodsByType = {
    'south': ['idly', 'dosa', 'samosa', 'vada', 'uttapam', 'rasam'],
    'north': ['biryani', 'butter chicken', 'naan', 'dal makhani', 'paneer tikka'],
    'chinese': ['noodles', 'fried rice', 'spring roll'],
    'japanese': ['sushi', 'ramen', 'tempura', 'miso soup'],
    'korean': ['kimchi', 'bibimbap', 'bulgogi', 'korean bbq', 'tteokbokki'],
    'italian': ['pizza', 'pasta']
};

const cuisineTitles = {
    'south': 'SOUTH INDIAN FOODS',
    'north': 'NORTH INDIAN FOODS',
    'chinese': 'CHINESE FOODS',
    'japanese': 'JAPANESE FOODS',
    'korean': 'KOREAN FOODS',
    'italian': 'ITALIAN FOODS'
};

// ======================== THEME FUNCTIONS ========================
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

window.addEventListener('load', function() {
    let theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
});

// ======================== CARD ANIMATIONS ========================
function cardUp(card) {
    card.style.transform = 'translateY(-10px)';
}
function cardDown(card) {
    card.style.transform = 'translateY(0)';
}

// ======================== MODAL FUNCTIONS ========================
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

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

window.addEventListener('click', function(e) {
    let modal = document.getElementById('modal');
    if (e.target === modal) closeModal();
});

// ======================== HOME PAGE SEARCH ========================
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

// ======================== PRODUCT PAGE FUNCTIONS ========================
function loadAllProducts() {
    let html = '';
    for (let food in foodData) {
        let imgPath = productImages[food] || 'default.png';
        html += `<div class="product-card" style="background-image: url('${imgPath}');">
                    <h3>${foodData[food].name}</h3>
                    <button onclick="showFood('${food}')">Analyze</button>
                </div>`;
    }
    document.getElementById('productGrid').innerHTML = html;
}

function searchProduct() {
    let search = document.getElementById('productSearch').value.toLowerCase();
    let html = '';
    for (let food in foodData) {
        if (food.includes(search) || foodData[food].name.toLowerCase().includes(search)) {
            let imgPath = productImages[food] || 'default.png';
            html += `<div class="product-card" style="background-image: url('${imgPath}');">
                        <h3>${foodData[food].name}</h3>
                        <button onclick="showFood('${food}')">Analyze</button>
                    </div>`;
        }
    }
    document.getElementById('productGrid').innerHTML = html;
}

// ======================== FOOD PAGE FUNCTIONS ========================
function getQueryParam(name) {
    let url = new URL(window.location);
    return url.searchParams.get(name);
}

function loadFoods() {
    let type = getQueryParam('type') || 'south';
    let foods = foodsByType[type] || [];
    document.getElementById('cuisineTitle').textContent = cuisineTitles[type] || 'FOODS';
    let html = '';
    foods.forEach(food => {
        if (foodData[food]) {
            let imgPath = productImages[food] || 'default.png';
            html += `<div class="product-card" style="background-image: url('${imgPath}');">
                        <h3>${foodData[food].name}</h3>
                        <button onclick="showFood('${food}')">Analyze</button>
                    </div>`;
        }
    });
    document.getElementById('foodGrid').innerHTML = html;
}

// ======================== PAGE INITIALISATION ========================
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we are on and run the appropriate loader
    if (document.getElementById('productGrid')) {
        loadAllProducts();
        // Also attach searchProduct to the search button (if not already done via onclick)
        let searchBtn = document.querySelector('#productSearch + button');
        if (searchBtn) searchBtn.onclick = searchProduct;
        let searchInput = document.getElementById('productSearch');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') searchProduct();
            });
        }
    }
    
    if (document.getElementById('foodGrid')) {
        loadFoods();
    }
    
    // Home page search enter key
    let homeSearch = document.getElementById('foodSearch');
    if (homeSearch) {
        homeSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') analyzeFood();
        });
    }
});
