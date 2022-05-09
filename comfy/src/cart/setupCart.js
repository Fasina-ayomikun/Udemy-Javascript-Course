import {
    getStorageItem,
    setStorageItem,
    formatPrice,
    getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count')
const cartItemDOM = getElement('.cart-items')
const cartTotalDOM = getElement('.cart-total')

let cart = getStorageItem('cart')

export const addToCart = (id) => {
  const item = cart.find((cartItem)=> cartItem.id === id);
  if(!item){
     let product = findProduct(id);
    
     product = {...product,amount:1}
     cart = [...cart,product]
     addToCartDOM(product)
  }
  else{
      // update values
      const amount = increaseAmount(id)
      const items = [...cartItemDOM.querySelectorAll('.cart-item-amount')]
      const newAmount = items.find((value)=>value.dataset.id === id)
      
     newAmount.textContent = amount
      
  }

  // add one to item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();

  // set cart in local storage
  setStorageItem('cart', cart)
  openCart()
};

function removeItem(id){
  cart = cart.filter((cartItem)=> cartItem.id !== id)
}

const displayCartItemCount = ()=>{
  const amount = cart.reduce((total,cartItem)=>{
    return(total += cartItem.amount);
  },0)
  cartItemCountDOM.textContent = amount;
}


const displayCartTotal = ()=>{
  let total = cart.reduce((total,cartItem)=>{
    return total += cartItem.price * cartItem.amount
  },0)
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`
}
const displayCartItemsDOM = ()=>{
  cart.forEach((cartItem)=>{
    addToCartDOM(cartItem)
  })
}

function changeAmount(type,id){
  let newAmount;


    cart = cart.map((cartItem)=>{
      if(cartItem.id === id){
        if(type === 'increase'){
           newAmount = cartItem.amount + 1;
        }else{
          newAmount = cartItem.amount - 1
        }
        cartItem = {...cartItem,amount: newAmount}
      }
      return cartItem
    })
    return newAmount;
  

}

const setupCartFunctionality = ()=>{
  cartItemDOM.addEventListener('click',function(e){
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;
    // remove
    if(e.target.classList.contains('cart-item-remove-btn')){
      removeItem(id);
      parent.parentElement.remove()
    }
    // increase
    if(parent.classList.contains('cart-item-increase-btn')){
      const newAmount = changeAmount('increase',parentID)
      parent.nextElementSibling.textContent = newAmount

    }
    // decrease
    if(parent.classList.contains('cart-item-decrease-btn')){
       const newAmount = changeAmount('decrease', parentID)
       if(newAmount === 0){
         removeItem(parentID)
         parent.parentElement.parentElement.remove()
       }else{
         parent.previousElementSibling.textContent = newAmount
       }
    }
    displayCartItemCount();
    displayCartTotal()
    setStorageItem('cart', cart)
  })
}

const init = ()=>{
  
  displayCartItemCount();
  displayCartTotal();

  // add all cart items to dom;
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality()
}
init()