let darkMode = localStorage.getItem('darkMode') || 'nah';

if (darkMode === 'yup') {
    document.body.classList.replace('lightMode', 'darkMode');
}

function toggleDarkMode() {
    if (darkMode === 'yup') {
        document.body.classList.replace('darkMode', 'lightMode');
        darkMode = 'nah';
    } else {
        document.body.classList.replace('lightMode', 'darkMode');
        darkMode = 'yup';
    }
    localStorage.setItem('darkMode', darkMode);
}