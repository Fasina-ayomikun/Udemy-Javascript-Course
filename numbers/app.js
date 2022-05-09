const numbers = [...document.querySelectorAll('.number')];


function updateCount(el){
    const value = parseInt(el.dataset.value);
    let increment = Math.ceil(value / 1000);
    let initialValue = 0;

    const increasingValue = setInterval(() => {
        initialValue += increment
        if( initialValue > value){

            el.textContent = `${value}+`;
            clearInterval(increasingValue);
            return
        }
        el.textContent = `${initialValue}+`     
    }, 1)
}

numbers.forEach((number) => {

    updateCount(number)
})


