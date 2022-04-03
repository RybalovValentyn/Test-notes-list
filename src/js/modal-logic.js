import {tasksImage} from './constants';
import {closeModalButton} from './modal-add';
import uniqid from 'uniqid';
import {getRenderList} from './notes';
import {data} from './constants';

const refs ={
    taskName: document.querySelector('.task-input'),
    taskContent: document.querySelector('.content-input'),
    taskSelekt: document.querySelector('.task-select'),
    taskData: document.querySelector('.task-data'),
    taskButton: document.querySelector('.form-submit-btn'),
    formTask: document.querySelector('.task-form'),}
const date = new Date();
getDateForm(date)

refs.formTask.addEventListener('submit', onselectedTask)

function onselectedTask(e) {
    e.preventDefault();
    let renderNotes = new GetModalData()
     console.log(renderNotes);
    
    getRenderList([renderNotes]);

    getDataTooDb(renderNotes);

    closeModalButton();
}

function GetModalData() {
    this.id = uniqid();
    this.name = refs.taskName.value;
    this.created = date.toDateString().slice(4, 15);;
    this.category = refs.taskSelekt.value;
    this.content = refs.taskContent.value;    
    this.isActiv = true;
    this.isArchiv = false;
    this.viewBox = '';
    this.pathD = '';
    this.data = [];
    if (isDate(dateParse()) !== isDate(date.toLocaleString().slice(0, 10))) {
        this.data = dateParse();
    };
    tasksImage.reduce((acc, img) =>{
        if (refs.taskSelekt.value.toLowerCase().includes(img.name.toLowerCase())) {
            this.viewBox = img.viewBox;
            this.pathD = img.pathD;
        }
    },[]);
   return {
       id: this.id,
       name: this.name,
       created: this.created,
       category: this.category,
       content: this.content,
       data: this.data,
       viewBox: this.viewBox,
       pathD: this.pathD,
       isActiv: this.isActiv,
       isArchiv: this.isArchiv
   } 
};

function getDateForm(date) {
    let data = date.toLocaleString().slice(0, 10).split(".").reverse().join('-')
    refs.taskData.value = data
    return data
};

const dateParse = () => {
    let dat = []
    refs.taskData.value.split('-').reverse().reduce((acc,num) =>{
        if (num.split("")[0].includes('0')) {
            dat.push(num.split("")[1].trim())
        } else dat.push(num)
        return acc
    },[])
     return dat.join('/')
};

const isDate = (dats) =>{
   return dats.split("").reduce((acc, num) =>{
        if (+num) {
         acc = acc + (+num)
         }
         return acc
    },0)    
};

function getDataTooDb(notes) {
    data.push(notes)
    console.log('data',data);
}

