import {data} from './constants';
import {getRemoveElById} from './remove-notes';
import {getRenderCategory} from './archiv-list';
import {getRewriteNotes} from './write-notes';

const ContainerList = document.querySelector('.notes-list');

ContainerList.addEventListener('click', onButtonClick);

function onButtonClick(e) {
    let idElement = e.target.parentElement.parentElement.parentElement.id ||
                    e.target.parentElement.parentElement.id
    typeButton(e.target.id, idElement)
};

const typeButton = (type, idElement) =>{
if (type === 'archiv' && idElement) {    
    getArchivNotes(idElement)
   }; 
if (type === 'remove') {
    getRemoveElById(idElement)
   };
if (type === 'write' && idElement) {    
    getRewriteNotes(idElement)
       } 
};

function getArchivNotes(idElement) {
let findEl = data.findIndex(el => el.id.toString() === idElement)
data.find(el => {    
    if (el.id.toString() === idElement) {
        console.log(el.id.toString());
        el.isArchiv = true;
        el.isActiv = false;
    return el }
});
getRemoveElById(idElement)
getElementTextContent(data[findEl].category);
getRenderCategory(data[findEl]);
};

function getElementTextContent(category) {
const deletedElement = document.getElementById(category);

if (deletedElement) {
   
    deletedElement.remove();
}
}

