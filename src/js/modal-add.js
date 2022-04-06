import {onRewriteDataTask} from './write-notes';
import { onCreatedTask } from './create-logic';

 const refs ={
    modalBtn : document.querySelector('.add-btn'),
    backdrop: document.querySelector('.modal-backdrop'),
    formBtn: document.querySelector('.task-form')
};

refs.modalBtn.addEventListener('click', togleModalBtn);

refs.backdrop.addEventListener('click', closeModal);

function togleModalBtn() {
    refs.formBtn.removeEventListener('submit', onRewriteDataTask );  
    refs.formBtn.addEventListener('submit', onCreatedTask);
    openModal()
};

function openModal(){
refs.backdrop.classList.replace('is-hiden', 'is-open');
};

function closeModal(e) {   
if (e.target.classList[0] === "modal-backdrop") {
    closeModalButton()
}
};

function closeModalButton() {
    refs.backdrop.classList.replace('is-open', 'is-hiden');
};

export {closeModalButton, openModal, closeModal};