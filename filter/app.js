let newProducts = [...products]

const productContainer = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const input = document.querySelector('.search-input');
const companiesContainer = document.querySelector('.companies');



const displayProducts = () => {
    if(newProducts < 1){
        productContainer.innerHTML = `<h6>  sorry, no products matched your search</h6>`
        return
    }

    productContainer.innerHTML = newProducts.map(({id,title,image,price}) => {
        return `<article class="product">
                 <img src="${image}", alt="" class="proct-img img">
                 <footer>
                     <h5 class="product-name">${title}</h5>
                     <span class="product-price">${price}</span>
                 </footer>
             </article>`
    }).join('')
}

displayProducts()

form.addEventListener('keyup', function () {
    const inputValue = input.value;
    newProducts = products.filter((item) => {
       return item.title.toLowerCase().includes(inputValue);
       
    });
    displayProducts()


})


function companiesList(){
    const companies =['all',...new Set( products.map((product) => 
        product.company))]


    companiesContainer.innerHTML = companies.map((company)=>{
        return ` <button class="company-btn" data-id='${company}'>${company}</button>`
    }).join('') 
}    

companiesList()

companiesContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('company-btn')){
        if(e.target.dataset.id === 'all'){
               newProducts = [...products]

        }
        else{
            newProducts = products.filter((product) =>{
                return product.company === e.target.dataset.id;
            })
        }
        input.value = '';
        displayProducts()
    }
})