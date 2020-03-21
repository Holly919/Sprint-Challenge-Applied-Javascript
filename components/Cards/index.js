// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleCards = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        const articleValues = Object.values(response.data.articles);
        console.log(articleValues);
        articleValues.forEach(item => {
            item.forEach(i => {
                const newArticle = cardCreator(i);
                articleCards.appendChild(newArticle);
            });
        });
    });

function cardCreator(obj){
    const card = document.createElement("div"),
    cardHeadline = document.createElement("div"),
    cardAuthor = document.createElement("div"),
    imgContainer = document.createElement("div"),
    authorImg = document.createElement("img"),
    authorName = document.createElement("span");

    card.classList.add("card");
    cardHeadline.classList.add("headline");
    cardHeadline.textContent = obj.headline;
    cardAuthor.classList.add("author");
    authorName.textContent = obj.authorName;
    imgContainer.classList.add("img-container");
    authorImg.src = obj.authorPhoto;

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    cardAuthor.appendChild(authorName);

    return card;
};

