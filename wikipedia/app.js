const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = document.querySelector('.form')
const input = document.querySelector('.form-input')
const results = document.querySelector('.results');

form.addEventListener('submit',function(e){
    e.preventDefault()
    const value = input.value;
    if(!value){
        results.innerHTML= `<div class="error">please enter valid search term</div>`
        return
    }
    fetchPages(value)
    
})

const fetchPages = async(searchValue)=>{
    results.innerHTML = `<div class='loading'></div>`;
    try {
        const response = await fetch(`${url}${searchValue}`);
        const data = await response.json()
        const result = data.query.search;
        if(result.length < 1){
            results.innerHTML= `<div class="error">No matching result, please try again</div>`
            return
        }
        renderResults(result)
        
    } catch (error) {
        results.innerHTML= `<div class="error">there was an error...</div>`
    }

}

const renderResults = (list)=>{
   const cardsList = list.map((item)=>{
       const {title,snippet,pageid} = item;
       return` 
       <a href=http://en.wikipedia.org/?curid=${pageid} target="_blank"></a>
       <h4>${title}</h4>
       <p${snippet}</p>
     `
   }).join('')

   results.innerHTML=`<div class="articles">
   ${cardsList}
   </div>` 
}