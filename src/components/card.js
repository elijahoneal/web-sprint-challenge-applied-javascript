import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const newCard = document.createElement('div')
  newCard.classList.add('card')
 
  const newHeadline = document.createElement('div')
  newHeadline.classList.add('headline')
  newHeadline.textContent = article.headline

  const newAuthor = document.createElement('div')
  newAuthor.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    const img = document.createElement('img')
    img.src = article.authorPhoto
    imgContainer.appendChild(img)
    newAuthor.appendChild(imgContainer)

  const span = document.createElement('span')
  span.textContent = article.authorName

  newCard.appendChild(newHeadline)
  newCard.appendChild(newAuthor)
  newCard.appendChild(span)
  newCard.addEventListener('click' , (() => {
    console.log(article.headline)
  }))
  return newCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res =>{
    const articleData = res.data.articles
    const subjects = Object.entries(articleData)
    console.log(subjects)
    subjects.map( subject => {
      subject[1].map ( item => {
        const cardSelect = document.querySelector(selector)
      cardSelect.appendChild(Card(item))
      })
    })
     
    })
  .catch( err => console.log(err))
}

export { Card, cardAppender }
