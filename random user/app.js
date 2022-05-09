import getUser from './fetchuser.js'

const getElement = (selection)=>{
    const element = document.querySelector(selection);
    if(element){
        return element
    }
    else{
        throw new Error('no element selected')
    }
}





const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person)=>{
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is `;
    btns[0].classList.add('active');

    btns.forEach((btn)=>{
        const label = btn.dataset.label;
        btn.addEventListener('click', ()=>{
            title.textContent = `My ${label}  is`;
            value.textContent = person[label];
            btns.forEach((btn)=>btn.classList.remove('active'))
            btn.classList.add('active')
        })
    })

}

const showUser = async()=>{
    const person = await getUser();
    displayUser(person)
}

window.addEventListener('DOMContentLoaded',showUser)
btn.addEventListener('click',showUser)