import foods from './foods.js';

// 1. Get DOM elements
const foodListElement = document.getElementById('food-list');
const searchBar = document.getElementById('search-bar');
const categoryFiltersElement = document.getElementById('category-filters');

// Modals
const foodModal = document.getElementById('food-modal');
const modalCloseBtn = foodModal ? foodModal.querySelector('.close-button') : null;

const aboutModal = document.getElementById('about-modal');
const aboutUsBtn = document.getElementById('about-us-button');
const aboutCloseBtn = aboutModal ? aboutModal.querySelector('.about-close-button') : null;

const privacyModal = document.getElementById('privacy-modal');
const privacyBtn = document.getElementById('privacy-policy-button');
const privacyCloseBtn = privacyModal ? privacyModal.querySelector('.privacy-close-button') : null;

const contactModal = document.getElementById('contact-modal');
const contactBtn = document.getElementById('contact-us-button');
const contactCloseBtn = contactModal ? contactModal.querySelector('.contact-close-button') : null;

// Modal Content Elements
const modalEmoji = document.getElementById('modal-emoji');
const modalNameEn = document.getElementById('modal-name-en');
const modalNameKo = document.getElementById('modal-name-ko');
const modalHowToEat = document.getElementById('modal-how-to-eat');
const modalDont = document.getElementById('modal-dont');
const modalTip = document.getElementById('modal-tip');
const googlePhotosButton = document.getElementById('google-photos-button');
const youtubeVideosButton = document.getElementById('youtube-videos-button');

// 2. Helper Functions
function closeAllModals() {
    [foodModal, aboutModal, privacyModal, contactModal].forEach(modal => {
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
        }
    });
    document.body.style.overflow = '';
}

function openModal(modal) {
    if (!modal) return;
    closeAllModals(); // Close others first
    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 3. Render Functions
function renderFoodCards(foodArray) {
    foodListElement.innerHTML = '';
    if (foodArray.length === 0) {
        foodListElement.innerHTML = 'No K-Food found matching your criteria.';
        return;
    }
    foodArray.forEach(food => {
        const foodCard = document.createElement('article');
        foodCard.classList.add('food-card');
        foodCard.innerHTML = `<div class="food-card-emoji">${food.emoji}</div> <div class="food-card-name-en">${food.name}</div> <div class="food-card-name-ko">${food.koreanName}</div>`;
        foodCard.addEventListener('click', () => openFoodModal(food));
        foodListElement.appendChild(foodCard);
    });
}

function openFoodModal(food) {
    if (modalEmoji) modalEmoji.textContent = food.emoji;
    if (modalNameEn) modalNameEn.textContent = food.name;
    if (modalNameKo) modalNameKo.textContent = food.koreanName;
    if (modalHowToEat) modalHowToEat.textContent = food.howToEat;
    if (modalDont) modalDont.textContent = food.dont;
    if (modalTip) modalTip.textContent = food.tip;
    if (googlePhotosButton) googlePhotosButton.onclick = () => window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent('Korean food ' + food.name)}`, '_blank');
    if (youtubeVideosButton) youtubeVideosButton.onclick = () => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent('Korean food ' + food.name)}`, '_blank');
    openModal(foodModal);
}

function renderCategoryFilters() {
    const categories = ['All', ...new Set(foods.map(food => food.category))];
    categoryFiltersElement.innerHTML = '';

    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-filter-btn');
        button.textContent = category;
        if (category === 'All') button.classList.add('active');
        button.addEventListener('click', () => filterByCategory(category));
        categoryFiltersElement.appendChild(button);
    });
}

let activeCategory = 'All';

function filterByCategory(category) {
    document.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.querySelector(`.category-filter-btn[data-category="${category}"]`);
    if (targetBtn) targetBtn.classList.add('active');
    activeCategory = category;
    filterAndSearchFoods();
}

function filterAndSearchFoods() {
    let filtered = [...foods];
    if (activeCategory !== 'All') filtered = filtered.filter(f => f.category === activeCategory);
    const term = searchBar.value.toLowerCase().trim();
    if (term) {
        filtered = filtered.filter(f =>
            f.name.toLowerCase().includes(term) ||
            f.koreanName.toLowerCase().includes(term) ||
            f.category.toLowerCase().includes(term)
        );
    }
    renderFoodCards(filtered);
}

// 4. Event Listeners
if (searchBar) searchBar.addEventListener('input', filterAndSearchFoods);

// Open Buttons
if (aboutUsBtn) aboutUsBtn.addEventListener('click', () => openModal(aboutModal));
if (privacyBtn) privacyBtn.addEventListener('click', () => openModal(privacyModal));
if (contactBtn) contactBtn.addEventListener('click', () => openModal(contactModal));

// Close Buttons
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAllModals);
if (aboutCloseBtn) aboutCloseBtn.addEventListener('click', closeAllModals);
if (privacyCloseBtn) privacyCloseBtn.addEventListener('click', closeAllModals);
if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeAllModals);

// Close on Background Click & ESC
[foodModal, aboutModal, privacyModal, contactModal].forEach(modal => {
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
});

// 5. Initialize
document.addEventListener('DOMContentLoaded', () => {
    closeAllModals(); // Ensure all hidden on load
    renderCategoryFilters();
    renderFoodCards(foods);
});
