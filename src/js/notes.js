import listTemplate from '../templates/list-title.hbs';
import {data} from './constants';
import {imagesPath} from './constants';

const refs = {
    container: document.querySelector('.notes-list'),
};

getRenderNoteList();

async function getRenderNoteList() {
    try {       
        const dataLoad = await [...data].reduce((acc, num, ind, arr) =>{                      
            if (num.isActiv === true) {             
                acc.push({...num, imagesPath})          
            }
            return acc
        },[]);
        if (typeof dataLoad === 'object') {
          getRenderList([...dataLoad]);
        }      
    } catch (error) { }
  }

function getRenderList(dataLoad) {
    refs.container.insertAdjacentHTML('afterbegin', listTemplate(dataLoad) );

  }
export {getRenderList}
