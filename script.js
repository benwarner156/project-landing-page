const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.showModal();
    });
});

closeButton.addEventListener('click', () => {
    modal.close();
});
