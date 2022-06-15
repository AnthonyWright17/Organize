// class list {
//   constructor(title, item, description){
//     this.title = title
//     this.item = item
//     this.description = description
//   }
// }
const myModal = document.querySelector('#ModalForm'),
      modalInput= myModal.querySelector('.modal-body input'),
      submit = document.querySelector('#createNew'),
      searchBtn=document.querySelector('#search'),
      searchField = document.querySelector('#searchShow'),
      template = document.querySelector('#template'),
      card = document.querySelector('#card'),
      cardTitle = document.querySelector('#cardTitle'),
      cardText = document.querySelector('#cardText'),
      cardLink = document.querySelector('#cardLink'),
      cardImg = document.querySelector('#cardImg'),
      searchForm = document.querySelector('#searchForm'),
      cardBtn = document.querySelector('#cardBtn'),
      showsModal = document.querySelector('#resCont');

//Form Submit Event      
submit.addEventListener('click', (event)=>{
  event.preventDefault(EventTarget)
  formHandler();
});
//Form Submit Function
function formHandler(){
  const listObj = {
    title: modalInput.form[0].value,
    listItem: modalInput.form[1].value,
    description: modalInput.form[2].value
  }
  console.log(listObj.title)
}
//Search Event
searchBtn.addEventListener('click', (event)=>{
  event.preventDefault(event.target)
  aniSearchHandler();
})
//Search Function
function aniSearchHandler(){
  let searchContent = searchField.value

  fetch(`https://api.jikan.moe/v4/anime?q=${searchContent}`)
  .then((res) => res.json())
  .then(data => {
    let searchResult = data.data
    for(let i = 0; i<searchResult.length; i++){
      cardImg.setAttribute('src', searchResult[i].images.webp.image_url)
      cardTitle.textContent=searchResult[i].title
      cardText.textContent = searchResult[i].synopsis
      cardLink.setAttribute('href', searchResult[i].url)
      let newCard = card.cloneNode(true)
      showsModal.appendChild(newCard)
    }
  });
}