// My approach to challenge

// const modalBtn = document.querySelector('.modal-btn');
// const overlay = document.querySelector('.modal-overlay');

// const closeBtn  = document.querySelector('.close-btn');

// modalBtn.addEventListener('click',function(){
//     overlay.style.display = 'flex';
// });

// closeBtn.addEventListener('click', function(){
//     overlay.style.display = 'none'
// });


// Another aproach

const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');

const closeBtn  = document.querySelector('.close-btn');


modalBtn.addEventListener('click', function(){
    overlay.classList.add('show-overlay')
});
closeBtn.addEventListener('click', function(){
    overlay.classList.remove('show-overlay')
})