document.addEventListener('DOMContentLoaded', () => {
    const cube = document.getElementById('cube');
    const foodInfo = document.getElementById('food-info');
    const foodName = document.getElementById('food-name');
    const foodDesc = document.getElementById('food-desc');
    const howToEat = document.getElementById('how-to-eat');
    const foodGrid = document.getElementById('food-grid');
    const searchInput = document.getElementById('searchInput');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    let currentRotation = { x: 0, y: 0 };
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    function initCube() {
        const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
        const cubeFoods = foodData.slice(0, 6);

        faces.forEach((face, index) => {
            const food = cubeFoods[index];
            const faceDiv = document.createElement('div');
            faceDiv.classList.add('cube-face', face);
            faceDiv.style.backgroundImage = `url(${food.image})`;
            faceDiv.innerHTML = `<div class="overlay">${food.name}</div>`;
            faceDiv.addEventListener('click', () => showFoodInfo(food));
            cube.appendChild(faceDiv);
        });
    }

    function initGrid() {
        foodData.forEach(food => {
            const img = document.createElement('img');
            img.src = food.image;
            img.alt = food.name;
            img.classList.add('w-full', 'h-24', 'object-cover', 'rounded-lg', 'cursor-pointer', 'shadow-md');
            img.addEventListener('click', () => showFoodInfo(food));
            foodGrid.appendChild(img);
        });
    }

    function showFoodInfo(food) {
        foodName.textContent = food.name;
        foodDesc.textContent = food.desc;

        howToEat.innerHTML = `
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                <h3 class="font-bold text-red-700"><i class="fas fa-times-circle"></i> Don't</h3>
                <p class="text-sm text-gray-700">${food.dont}</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-2">
                <h3 class="font-bold text-green-700"><i class="fas fa-check-circle"></i> Do</h3>
                <p class="text-sm text-gray-700">${food.do}</p>
            </div>
        `;
        
        window.scrollTo({ top: foodInfo.offsetTop - 100, behavior: 'smooth' });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredFoods = foodData.filter(food =>
            food.name.toLowerCase().includes(searchTerm) ||
            food.koreanName.toLowerCase().includes(searchTerm)
        );
        
        if (filteredFoods.length > 0) {
            showFoodInfo(filteredFoods[0]);
        }
        
        foodGrid.innerHTML = '';
        filteredFoods.forEach(food => {
            const img = document.createElement('img');
            img.src = food.image;
            img.alt = food.name;
            img.classList.add('w-full', 'h-24', 'object-cover', 'rounded-lg', 'cursor-pointer', 'shadow-md');
            img.addEventListener('click', () => showFoodInfo(food));
            foodGrid.appendChild(img);
        });
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cube rotation logic
    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        currentRotation.y += deltaX * 0.5;
        currentRotation.x -= deltaY * 0.5;

        cube.style.transform = `translateZ(-125px) rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    initCube();
    initGrid();
});