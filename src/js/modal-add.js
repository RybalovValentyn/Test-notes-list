const refs ={
    modalBtn : document.querySelector('.add-btn'),
    backdrop: document.querySelector('.modal-backdrop'),
}

refs.modalBtn.addEventListener('click', openModal);
refs.backdrop.addEventListener('click', closeModal);


function openModal(){
refs.backdrop.classList.replace('is-hiden', 'is-open');
}



function closeModal(e) {   
if (e.target.classList[0] === "modal-backdrop") {
    closeModalButton()
}
}

function closeModalButton() {
    refs.backdrop.classList.replace('is-open', 'is-hiden');
}
export {closeModalButton}