window.addEventListener('DOMContentLoaded', () => {
    //changing the underline color of a navigation link
    const currentLocation = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.header-nav__link');

    console.log(currentLocation, menuItems)

    menuItems.forEach(item => {
        if(item.getAttribute('href') == currentLocation) {
            item.classList.add('active');
        }
    })
})