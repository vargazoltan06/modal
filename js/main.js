function modalOpener () {
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.modal__button--open');
    modalButton.addEventListener('click', () => {
        modal.setAttribute('class', 'modal--visible');
    });
};

modalOpener();

function modalCloser() {
    const modal = document.querySelector('.modal');
    const closerButtons = document.querySelectorAll('.closeButton');
    for (let i = 0; i < closerButtons.length; i += 1) {
        closerButtons[i].addEventListener('click', () => {
            modal.setAttribute('class', 'modal');
        })
    };
};

modalCloser();


function modalCloser2 () {
    const modal = document.querySelector('.modal');
    window.addEventListener('click', function (event){
        if (event.target == modal) {
            modal.setAttribute('class', 'modal');
        }
    });
}; 

modalCloser2();

