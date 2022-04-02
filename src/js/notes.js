import listTemplate from '../templates/list-title.hbs';
import data from './db.json';

const dataLoad = [...data.users];
const refs = {
    container: document.querySelector('.notes-list'),
    addBtn: document.querySelector('.add-btn')
}
refs.addBtn.addEventListener('click', onBtnClick)

getRenderNoteList();


async function getRenderNoteList() {
    try {       
        const dataLoad = await [...data.users];
        if (typeof dataLoad === 'object') {
          getRenderList(dataLoad);
        }      
    } catch (error) { }
  }

function onBtnClick() {
    console.log(dataLoad);    
}

function getRenderList(dataLoad) {
    refs.container.insertAdjacentHTML('afterbegin', listTemplate(dataLoad) );

  }

