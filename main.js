document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});