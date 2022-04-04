import {data} from './constants';
import archivTemplate from '../templates/list-archiv.hbs';

const refs ={
    container: document.querySelector('.table-archiv-container'),
}
let dataRender = [];

getRenderNoteList()

async function getRenderNoteList() {
    try {     
        arrayFilterCategory()
        if (typeof dataRender === 'object') {
          getRenderList(dataRender);
        }      
    } catch (error) { }
  };

function getRenderList( dataLoad) {
    refs.container.insertAdjacentHTML('afterbegin', archivTemplate(dataLoad) );
  }

function CategoryObject({category, isActiv, isArchiv, viewBox, pathD}) {
    this.id =category;
    this.category = category;
    this.isActiv = 1;
    this.isArchiv = 1;
    this.viewBox = viewBox;
    this.pathD = pathD;
    return { id: this.id, category: this.category, isActiv: this.isActiv, isArchiv: this.isArchiv,
    viewBox: this.viewBox, pathD: this.pathD}
};

function arrayFilterCategory() {
    let dataLoadIsactiv = data.filter( num => num.isActiv=== false);
    dataLoadIsactiv.reduce((acc, num, ind,arr) =>{
    acc = dataRender.map(num => num.category)
        if (acc.includes(num.category) ) {
            dataRender.reduce((acc, n, ind) =>{
                if (n.category ===num.category) {
                    n.isActiv +=1
                    if (num.isArchiv) {
                        n.isArchiv +=1
                        }                  
                            }},[])                
                        }else dataRender.push(new CategoryObject(num))            
                    return dataRender
},[])};

function getRenderCategory(archivedNote) {
    dataRender = [];
arrayFilterCategory();
   const newDatarender = [dataRender.find(el =>el.category === archivedNote.category)]
    console.log(newDatarender);
    getRenderList(newDatarender)
}
export {getRenderCategory}