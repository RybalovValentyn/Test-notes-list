import {data} from './constants';
import {openModal, closeModalButton} from './modal-add';
import {onCreatedTask, refs, getDateForm, date, dateParse, clearlModalInput} from './create-logic';
import {getRemoveElById} from './remove-notes';
import {getRenderList} from './notes';

let elementForUpdate = {};

function getRewriteNotes(idElement){    
    refs.formBtn.removeEventListener('submit', onCreatedTask);        
    refs.formBtn.addEventListener('submit', onRewriteDataTask );       
  getInitialData(idElement);
  openModal();   
};

function onRewriteDataTask(e) {
    e.preventDefault();   

      
    RewriteDataBase(elementForUpdate);
}

function getInitialData(idElement) {
    let findEl = data.findIndex(el => el.id.toString() === idElement)
    elementForUpdate =  data.find(el =>el.id.toString() === idElement);
    initialWriteModal(data[findEl])
    };

function initialWriteModal(params) {
    refs.taskName.value = params.name;
    refs.taskContent.value = params.content;
    refs.taskSelekt.value = params.category;
    refs.taskData.value = getDateForm(date);  
};

function RewriteDataBase(elementForUpdate) {
 let elForUpdata =[];
    data.find((el) =>{
        if (el.id === elementForUpdate.id) {
            console.log('RewriteDataBase',elementForUpdate);
            el.name = refs.taskName.value;
            el.content =  refs.taskContent.value;
            el.category =  refs.taskSelekt.value;
            console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',el.data.length)
            if (el.data.length === 0) {
                [el.data = dateParse()];           
                       console.log('1elqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',el.data.length);
               }else if (el.data.length === 1 || el.data.length === 8 ) {
                el.data = [el.data, dateParse()];             
                console.log('2elcccccccccccccccccccccccccccccc',el);
            }else el.data = [el.data[1], dateParse()];
            elForUpdata = [el]
        }
    })


getRemoveElById(elementForUpdate.id);
getRenderList(elForUpdata);
closeModalButton();
clearlModalInput();

};


export {getRewriteNotes, onRewriteDataTask}