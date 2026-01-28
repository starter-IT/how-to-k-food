document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.dataset.theme = 'dark';
            themeToggle.textContent = '라이트 모드';
        } else {
            body.dataset.theme = 'light';
            themeToggle.textContent = '다크 모드';
        }
    };

    // Check for a saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Add event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        let newTheme;
        if (body.dataset.theme === 'dark') {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    console.log('How to K-Food website loaded with theme toggle!');
});
