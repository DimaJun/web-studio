window.addEventListener('DOMContentLoaded', () => {
    // modal
    const modal = document.querySelector("#modal");
    const openBtn = document.querySelector('#openModalBtn');
    const closeBtn = document.querySelector('#closeModalBtn');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.documentElement.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.documentElement.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if(e.target == modal) {
            modal.style.display = 'none';
            document.documentElement.style.overflow = 'auto';
        }
    })
})