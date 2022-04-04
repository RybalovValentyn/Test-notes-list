import {data} from './constants';

function getRemoveElById(id) {
const element = document.getElementById(id);
element.remove(); 
console.log('getRemoveElById',data);
}

export {getRemoveElById}