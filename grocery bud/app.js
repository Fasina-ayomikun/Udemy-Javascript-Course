// const alert = document.querySelector('.alert');
// const form = document.querySelector('.grocery-form');
// const grocery = document.querySelector('#grocery');
// const submitBtn = document.querySelector('.submit-btn');
// const container = document.querySelector('.grocery-container');
// const list = document.querySelector('.grocery-list');
// const clearBtn = document.querySelector('.clear-btn');


// let editElement;
// let editFlag = false;
// let editID = '';


// form.addEventListener('submit',addItem);
// clearBtn.addEventListener('click', clearItems);
// window.addEventListener('DOMContentLoaded', setupItems);

// function addItem(e){
//     e.preventDefault();
//     const value = grocery.value;

//     const id = new Date().getTime().toString();
//     if(value !== '' && editFlag ===  false){
//         createListItem(id,value)

//     displayAlert('item added to the list', 'sucess');
//     container.classList.add('show-container');
//     addToLocalStorage(id,value);
//     setBackToDefault()
//     }
//     else if (value !== '' && editFlag === true){
//         editElement.innerHTML = value;
//         displayAlert('value changed','success');
//         editLocalStorage(editID,value);
//         setBackToDefault();
//     }
//     else{
//         displayAlert('please enter value', 'danger')
//     }
// }

// function displayAlert(text,action){
//     alert.textContent = text;
//     alert.classList.add(`alert-${action}`);

//     setTimeout(function(){
//         alert.textContent = '';
//         alert.classList.remove(`alert-${action}`);
//     },1000)
// }

// function clearItems(){
//     const items = document.querySelectorAll('.grocery-item');
//     if(items.length > 0){
//         items.forEach(function(item){
//             list.removeChild(item);

//         });
//         container.classList.remove('show-container');
//         displayAlert('empty list','danger');
//         localStorage.removeItem('list');
        
//     }
// }
// function deleteItem(e){
//     const element = e.currentTarget.parentElement.parentElement;
//     const id = element.dataset.id;
//     list.removeChild(element);
//     if(list.children.length === 0){
//         container.classList.remove('show-container')
//     }
//     displayAlert('item removed', 'danger');
//     setBackToDefault();
//     removeFromLocalStorage(id)
// }
// function editItem(e){
//     const element = e.currentTarget.parentElement.parentElement;
//     editElement = e.currentTarget.parentElement.previousElementSibling;

//     grocery.value = editElement.innerHTML;
//     editFlag = true;
//     editID = element.dataset.id;
//     submitBtn.textContent = 'edit';
    
// }
// function setBackToDefault(){
//     grocery.value = '';
//     editFlag =false;
//     editID ='';
//     submitBtn.textContent = 'submit';
// }

// function addToLocalStorage(id,value){
//     const grocery = {id:id,value:value};
//     let items = getLocalStorage();
//     items.push(grocery);
//     localStorage.setItem('list', JSON.stringify(items))     
// }
// function removeFromLocalStorage(id) {
//     let items = getLocalStorage();
//     items = items.filter(function(item){
//         if(item.id !== id){
//             return item
//         }
//     });
//     localStorage.setItem('list', JSON.stringify(items))     
// }

// function editLocalStorage(id,value){
//     let items = getLocalStorage();
//     items =items.map(function(item){
//         if(item.id === id){
//             item.value = value
//         }
//         return item;
//     })
//     localStorage.setItem('list', JSON.stringify(items))     
// }


// function getLocalStorage() {
//     return localStorage.getItem('list')
//     ?JSON.parse(localStorage.getItem('list'))
//     :[];
// }

// function setupItems(){
//     let items = getLocalStorage();
//     if(items.length > 0){
//       items.forEach(function(item){
//           createListItem(item.id,item.value)
//       })
//       container.classList.add('show-container')
//     }
// }

// function createListItem(id,value){
    

//     const element = document.createElement('article');
//         element.classList.add('grocery-item');
//         const attr = document.createAttribute('data-id');
//         attr.value = id;
//         element.setAttributeNode(attr);
//         element.innerHTML = ` <p class="title">
//       ${value}
//     </p>
//     <div class="btn-container">
//         <button class="edit-btn" type="button">
//             <i class="fas fa-edit"></i>
//         </button>
//         <button class="delete-btn" type="button">
//             <i class="fas fa-trash"></i>
//         </button>
//     </div>`;
//     const deleteBtn = element.querySelector('.delete-btn');
//     const editBtn = element.querySelector('.edit-btn');

//     deleteBtn.addEventListener('click', deleteItem);
//     editBtn.addEventListener('click', editItem);
//     list.appendChild(element);
// }











// // my work


const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


let editElement;
let editFlag =false;
let editID = '';

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded',setItem)


function addItem(e){
    e.preventDefault();

    const value = grocery.value;
    let id = new Date().getTime().toString();
    if(value !== '' && editFlag === false){
        createItem(id,value)
        
        

        displayAlert('item added', 'success');
        container.classList.add('show-container')
        addToLocalStorage(id,value);
        setToDefault()
    }
    else if (value !=='' && editFlag === true){
        editElement.innerHTML = value;
        displayAlert('item edited successfully', 'success')
        editLocalStorage(editID, value)
        setToDefault();
    }
    else{
        displayAlert('empty input', 'danger');
    }

}

function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(function(){
        alert.textContent ='';
        alert.classList.remove(`alert-${action}`)
    },1000)
}

function setToDefault(){
    grocery.value = ``;
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

function clearItems(){
    const items = document.querySelectorAll('.grocery-item')
        if(items.length > 0){
            items.forEach(function(item){
                list.removeChild(item)
            })
        }
    container.classList.remove('show-container');
    displayAlert('list cleared', 'success')
    localStorage.removeItem ('list')
}
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'success');
    setToDefault();
    removeFromLocalStorage(id)
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    
    grocery.value = editElement.innerHTML;
    editID = element.dataset.id;
    editFlag = true;
    submitBtn.textContent ='edit'
    
}

function addToLocalStorage(id,value){
    const grocery = {id:id,value:value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items))
};

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return item
        }
        
    });
    console.log('removing');
    localStorage.setItem('list', JSON.stringify(items))     
}

function editLocalStorage(id,value){
    let items = getLocalStorage();
    items =items.map(function(item){
        if(item.id === id){
            item.value = value
        }
        return item;
    })
    
    localStorage.setItem('list', JSON.stringify(items))     
}

function getLocalStorage(){
    return localStorage.getItem('list')
          ?JSON.parse(localStorage.getItem('list'))
          :[];
}

function createItem(id, value){
    const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <p class="title">${value}</p>
             <div class="btn-container">
                 <button class="edit-btn" type="button">
                     <i class="fas fa-edit"></i>
                 </button>
                 <button class="delete-btn" type="button">
                 <i class="fas fa-trash"></i>
                 </button>
             </div>`;
          
        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
      
        deleteBtn.addEventListener('click',deleteItem)
        editBtn.addEventListener('click',editItem)
        list.appendChild(element);

}
function setItem(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createItem(item.id,item.value)
        })

        container.classList.add('show-container')
    }
}