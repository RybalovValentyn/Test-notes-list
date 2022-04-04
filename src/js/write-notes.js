// import {data} from './constants';
// import {openModal, closeModal} from './modal-add';
// import {onselectedTask, refs} from './modal-logic'

// function getRewriteNotes(idElement){
//   console.log('idElement',idElement); 
//   getRewriteData(idElement);
//   openModal(); 

//   refs.formTask.removeEventListener('submit', onselectedTask);
// };

// function getRewriteData(idElement) {
//     let findEl = data.findIndex(el => el.id.toString() === idElement)
//     data.find(el => {    
//         if (el.id.toString() === idElement) {
//              el.isArchiv = true;
//             el.isActiv = false;
//         return el }
//     });
//     initialWriteModal(data[findEl])
//     // getRemoveElById(idElement)
//     // getElementTextContent(data[findEl].category);
//     // getRenderCategory(data[findEl]);
//     };
// export {getRewriteNotes}

// function initialWriteModal(params) {
//     console.log(params);
//     refs.taskName.value = params.name;
//     refs.taskContent.value = params.content;
//     refs.taskSelekt.value = params.category;
//     refs.taskData.value = params.data[0].split('/').join('-');
//     console.log(params.data[0].split('/').join('-'));
// }