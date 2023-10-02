let modalElms = document.querySelectorAll('.modal');
let modalBoxElms = document.querySelectorAll('.modal__box');
let openModalBtnElms = document.querySelectorAll('.open-modal');

function closeModalHandler(modal) {
    modal.classList.remove('modal--show');
}

function addEventHandler(btn, modal) {
    btn.addEventListener('click', () => {
        closeModalHandler(modal);
    });
}

function buttonsDataHandler(modal) {
    let closeElm = modal.querySelector('.modal__close-icon');
    let closeBtnElm = modal.querySelector('.modal__close-btn');
    let saveBtnElm = modal.querySelector('.modal__save-btn');

    addEventHandler(closeElm, modal);
    addEventHandler(closeBtnElm, modal);
    addEventHandler(saveBtnElm, modal);
}

function openModalHandler(e) {
    e.stopPropagation();
    for (let modal of modalElms) {
        if (modal.getAttribute('id') === this.getAttribute('data-modal-id')) {
            modal.classList.add('modal--show');

            buttonsDataHandler(modal);
        }
    }
}

function start() {
    for (let btn of openModalBtnElms) {
        btn.addEventListener('click', openModalHandler);
    }

    document.addEventListener('click', () => {
        for (let modal of modalElms) {
            modal.classList.remove('modal--show');
        }
    });
}

function stopPropagationHandler() {
    for (let modalBox of modalBoxElms) {
        modalBox.addEventListener('click', e => e.stopPropagation());
    }
}

stopPropagationHandler();
start();