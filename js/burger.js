window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('#burgerMenu');
    
    if(menu.style.display == 'block') {
        menu.style.display = 'none';
    }

    function openNav() { 
        document.querySelector('#burgerMenu').style.display = "block";
        document.documentElement.style.overflow = 'hidden';
    }

    function closeNav() {
        document.querySelector('#burgerMenu').style.display = 'none';
        document.documentElement.style.overflow = 'auto';
    }
  
    document.querySelector('.open-burger').addEventListener('click', () => {
        openNav();
    })

    document.querySelector('.close-burger').addEventListener('click', () => {
        closeNav();
    })
})