import {data} from './constants';

const ContainerList = document.querySelector('.notes-list');
ContainerList.addEventListener('click', onButtonClick);

function onButtonClick(e) {
    let idElement = e.target.parentElement.parentElement.parentElement.id ||
                    e.target.parentElement.parentElement.id
    typeButton(e.target.id, idElement)
}

const typeButton = (type, idElement) =>{
if (type === 'remove') {
    console.log('sdf', idElement);
    getRemoveElById(idElement)
   } else return
}

function getRemoveElById(id) {
const element = document.getElementById(id);
element.remove(); 
console.log(data);

let datas = data.filter(el => el.id == id);
console.log(datas);
}
