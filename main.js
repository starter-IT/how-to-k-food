import foods from './foods.js';

// Get DOM elements
const foodListElement = document.getElementById('food-list');
const searchBar = document.getElementById('search-bar');
const categoryFiltersElement = document.getElementById('category-filters');
const foodModal = document.getElementById('food-modal');
const closeButton = foodModal ? foodModal.querySelector('.close-button') : null; // Added null check
const modalEmoji = document.getElementById('modal-emoji');
const modalNameEn = document.getElementById('modal-name-en');
const modalNameKo = document.getElementById('modal-name-ko');
const modalHowToEat = document.getElementById('modal-how-to-eat');
const modalDont = document.getElementById('modal-dont');
const modalTip = document.getElementById('modal-tip');
const googlePhotosButton = document.getElementById('google-photos-button');
const youtubeVideosButton = document.getElementById('youtube-videos-button');

// Added for About Modal
const aboutUsButton = document.getElementById('about-us-button');
const aboutModal = document.getElementById('about-modal');
const aboutCloseButton = aboutModal ? aboutModal.querySelector('.about-close-button') : null;

// Added for Privacy Modal
const privacyPolicyButton = document.getElementById('privacy-policy-button');
const privacyModal = document.getElementById('privacy-modal');
const privacyCloseButton = privacyModal ? privacyModal.querySelector('.privacy-close-button') : null;

// Ensure modal is hidden immediately when script starts, overriding any potential initial display issues.
if (foodModal) {
    foodModal.style.display = 'none';
}
// Added for aboutModal
if (aboutModal) {
    aboutModal.style.display = 'none';
}
// Added for privacyModal
if (privacyModal) {
    privacyModal.style.display = 'none';
}

let currentFoods = [...foods]; // To hold the currently filtered/searched foods

// --- Rendering Functions ---

// Renders all food cards
function renderFoodCards(foodArray) {
    foodListElement.innerHTML = ''; // Clear existing cards
    if (foodArray.length === 0) {
        foodListElement.innerHTML = '<p class="no-results">No K-Food found matching your criteria.</p>';
        return;
    }
    foodArray.forEach(food => {
        const foodCard = document.createElement('article');
        foodCard.classList.add('food-card');
        foodCard.dataset.id = food.id; // Store food ID for modal lookup

        foodCard.innerHTML = `
            <div class="food-card-emoji">${food.emoji}</div>
            <div class="food-card-name-en">${food.name}</div>
            <div class="food-card-name-ko">${food.koreanName}</div>
        `;
        foodCard.addEventListener('click', () => openFoodModal(food.id));
        foodListElement.appendChild(foodCard);
    });
}

// Generates and renders category filter buttons
function renderCategoryFilters() {
    const categories = ['All', ...new Set(foods.map(food => food.category))]; // Get unique categories
    categoryFiltersElement.innerHTML = '';

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-filter-btn');
        button.textContent = category;
        button.dataset.category = category;
        if (category === 'All') {
            button.classList.add('active'); // 'All' is active by default
        }
        button.addEventListener('click', () => filterByCategory(category));
        categoryFiltersElement.appendChild(button);
    });
}

// --- Filtering and Searching Logic ---

let activeCategory = 'All'; // Track active category

function filterAndSearchFoods() {
    let filtered = [...foods];

    // Apply category filter
    if (activeCategory !== 'All') {
        filtered = filtered.filter(food => food.category === activeCategory);
    }

    // Apply search filter
    const searchTerm = searchBar.value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(food =>
            food.name.toLowerCase().includes(searchTerm) ||
            food.koreanName.toLowerCase().includes(searchTerm) ||
            food.category.toLowerCase().includes(searchTerm) ||
            food.howToEat.toLowerCase().includes(searchTerm) ||
            food.dont.toLowerCase().includes(searchTerm) ||
            food.tip.toLowerCase().includes(searchTerm)
        );
    }
    currentFoods = filtered;
    renderFoodCards(currentFoods);
}

function filterByCategory(category) {
    // Update active category button styling
    document.querySelectorAll('.category-filter-btn').forEach(button => {
        button.classList.remove('active');
    });
    const targetButton = document.querySelector(`.category-filter-btn[data-category="${category}"]`);
    if (targetButton) { // Added null check
        targetButton.classList.add('active');
    }

    activeCategory = category;
    filterAndSearchFoods();
}

// --- Modal Functions ---

function openFoodModal(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (!food) return;

    if (modalEmoji) modalEmoji.textContent = food.emoji;
    if (modalNameEn) modalNameEn.textContent = food.name;
    if (modalNameKo) modalNameKo.textContent = food.koreanName;
    if (modalHowToEat) modalHowToEat.textContent = food.howToEat;
    if (modalDont) modalDont.textContent = food.dont;
    if (modalTip) modalTip.textContent = food.tip;

    // Set up external links
    if (googlePhotosButton) googlePhotosButton.onclick = () => window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent('Korean food ' + food.name)}`, '_blank');
    if (youtubeVideosButton) youtubeVideosButton.onclick = () => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent('Korean food ' + food.name)}`, '_blank');

    if (foodModal) {
        foodModal.style.display = 'flex'; // Use flex to center, matches CSS active class
        foodModal.classList.add('active');
    }
    document.body.style.overflow = 'hidden'; // Prevent scrolling on body when modal is open
}

function closeFoodModal() {
    if (foodModal) {
        foodModal.classList.remove('active');
        foodModal.style.display = 'none'; // Ensure it's hidden explicitly
    }
    document.body.style.overflow = ''; // Restore scrolling on body
}

// --- About Modal Functions ---

function openAboutModal() {
    // If food modal is open, close it first to ensure only one modal is active
    if (foodModal && foodModal.classList.contains('active')) {
        closeFoodModal();
    }
    if (aboutModal) {
        aboutModal.style.display = 'flex';
        aboutModal.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    if (aboutModal) {
        aboutModal.classList.remove('active');
        aboutModal.style.display = 'none';
    }
    document.body.style.overflow = '';
}

// --- Privacy Modal Functions ---

function openPrivacyModal() {
    // If food modal is open, close it first
    if (foodModal && foodModal.classList.contains('active')) {
        closeFoodModal();
    }
    // If about modal is open, close it first
    if (aboutModal && aboutModal.classList.contains('active')) {
        closeAboutModal();
    }
    if (privacyModal) {
        privacyModal.style.display = 'flex';
        privacyModal.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
    if (privacyModal) {
        privacyModal.classList.remove('active');
        privacyModal.style.display = 'none';
    }
    document.body.style.overflow = '';
}

// --- Event Listeners ---
if (searchBar) searchBar.addEventListener('input', filterAndSearchFoods);
if (closeButton) closeButton.addEventListener('click', closeFoodModal);
if (foodModal) {
    foodModal.addEventListener('click', (event) => {
        if (event.target === foodModal) { // Close when clicking outside the modal content
            closeFoodModal();
        }
    });
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && foodModal && foodModal.classList.contains('active')) {
        closeFoodModal();
    }
});

// --- Event Listeners for About Modal ---
if (aboutUsButton) aboutUsButton.addEventListener('click', openAboutModal);
if (aboutCloseButton) aboutCloseButton.addEventListener('click', closeAboutModal);
if (aboutModal) {
    aboutModal.addEventListener('click', (event) => {
        if (event.target === aboutModal) {
            closeAboutModal();
        }
    });
}
document.addEventListener('keydown', (event) => {
    // Check if aboutModal is active, and foodModal is NOT active, to avoid conflict
    if (event.key === 'Escape' && aboutModal && aboutModal.classList.contains('active') && !(foodModal && foodModal.classList.contains('active'))) {
        closeAboutModal();
    }
});

// --- Event Listeners for Privacy Modal ---
if (privacyPolicyButton) privacyPolicyButton.addEventListener('click', openPrivacyModal);
if (privacyCloseButton) privacyCloseButton.addEventListener('click', closePrivacyModal);
if (privacyModal) {
    privacyModal.addEventListener('click', (event) => {
        if (event.target === privacyModal) {
            closePrivacyModal();
        }
    });
}
document.addEventListener('keydown', (event) => {
    // Check if privacyModal is active, and other modals are NOT, to avoid conflict
    if (event.key === 'Escape' && privacyModal && privacyModal.classList.contains('active') && !(foodModal && foodModal.classList.contains('active')) && !(aboutModal && aboutModal.classList.contains('active'))) {
        closePrivacyModal();
    }
});


// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // As a double check, ensure modal is hidden on DOMContentLoaded too
    if (foodModal) {
        foodModal.style.display = 'none';
    }
    // Added for aboutModal
    if (aboutModal) {
        aboutModal.style.display = 'none';
    }
    // Added for privacyModal
    if (privacyModal) {
        privacyModal.style.display = 'none';
    }

    // Only render if elements exist
    if (categoryFiltersElement) renderCategoryFilters();
    if (foodListElement) renderFoodCards(foods); // Render all foods initially
});