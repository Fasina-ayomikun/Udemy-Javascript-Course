function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        return element
    }
    else {
        throw new Error(`no such element exist`)
    }
}

export default getElement;