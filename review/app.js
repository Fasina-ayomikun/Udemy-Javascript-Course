const reviews =[
    {
        id: 1,
        name:'susan smith',
        job: 'web developer',
        img: '../scholarship.jpeg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo fugiat aspernatur omnis voluptatem non quibusdam expedita, placeat tempore animi!',
    },
    {
        id:2,
        name: 'Bill johnson',
        job: 'web designer',
        img: '../student.jpeg',
        text: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit vel rem ipsum.',
    },
    {
        id:3,
        name: 'Susy jones',
        job: 'intern',
        img: '../math-stu.jpeg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quia reiciendis, illum quis ea tenetur sequi necessitatibus fugiat nihil beatae.',
    },
    {
        id: 4,
        name: 'Anna anderson',
        job: 'the boss',
        img: '../person-1.jpeg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eius rem reiciendis magnam in hic iure recusandae.',
    },
    {
        id: 5,
        name: 'David Cade',
        job: 'the professor',
        img: '../prof.jpeg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eius rem reiciendis magnam in hic iure recusandae.',
    }
];

// const img = document.getElementById('person-img');    
// const author = document.getElementById('author');    
// const job = document.getElementById('job');    
// const info = document.getElementById('info');    

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');


// let currentItem = 0;

// window.addEventListener('DOMContentLoaded', function(){
//     showPerson(currentItem);
// });

// function showPerson(person){
//     const item = reviews[person];
//     img.src = item.img;
//     author.textContent= item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
    
// };

// nextBtn.addEventListener('click', function(){
//     currentItem ++;

//     if(currentItem > reviews.length-1){
//         currentItem  =0;
//     }
//     showPerson(currentItem);
// })
// prevBtn.addEventListener('click', function(){
//     currentItem --;

//     if(currentItem < 0){
//         currentItem  = reviews.length-1;
//     }
//     showPerson(currentItem);
// });

// randomBtn.addEventListener('click', function(){
//     showPerson(getRandomNumber())
// })

// function getRandomNumber(){
//     return Math.floor(Math.random() * reviews.length)
// }

















// my work

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

function showPerson(person){
   const item = reviews[person];
   img.src= item.img

   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
}


function getRandomNumber(){
    return Math.floor(Math.random() * reviews.length)
}

prevBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    };
    showPerson(currentItem);
})
nextBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length-1;
    };
    showPerson(currentItem);
});
 
randomBtn.addEventListener('click', function(){
    showPerson(getRandomNumber())
})