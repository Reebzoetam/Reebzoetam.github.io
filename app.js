document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const gridItems = document.querySelectorAll('.grid-item');
    const lines = document.querySelectorAll('.profile-text .line');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = event.target.getAttribute('href');
            window.location.href = targetPage;
        });
    });

    gridItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const targetPage = item.getAttribute('data-target');
            window.location.href = targetPage;
        });
    });

        lines.forEach((line, index) => {
            const delay = index * 2; // Adjust delay based on the duration of each animation
            line.style.animationDelay = `${delay}s`;
        });
});