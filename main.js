'use strict';

const products = [
    {
        name: 'Jodhpur 1',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 2',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 3',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 4',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 5',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 6',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 7',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 8',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    },
    {
        name: 'Jodhpur 9',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9]
    }
];

const submit = []

const comments = [];

const cart = [];

const wishlist = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildCards = () => {
    let domString = '';
    for (let i = 0; i < products.length; i++){
        domString += `<div class="card text-center" style="width: 30%; margin: 1%;">
                        <h5 class="card-title mt-2">${products[i].name}</h5>
                        <img class="card-img-top" src="${products[i].image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${products[i].price}</h5>
                            <div class="dropdown m-2">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sizes</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        ${sizeList(products[i])}
                                    </div>
                            </div>
                            <p class="card-text">${products[i].description}</p>
                            <div class="container d-flex">
                                <a id="add-to-cart-${[i]}"class="btn btn-primary m-1">Add to Cart</a>
                                <a id="add-to-wishlist-${[i]}"class="btn btn-primary m-1">Add to Wishlist</a>
                            </div>
                        </div>
                    </div>`;
    }
    printToDom('cardContainer', domString);
}

const sizeList = (p) => {
    let domString = '';
    for (let i = 0; i < p.sizes.length; i++){
        domString += `<a class="dropdown-item">${p.sizes[i]}</a>`
    }
    return domString;
}

const addToCart = (e) => {
    const target = e.target.id;
    for (let i = 0; i < products.length; i++){
        if (target === `add-to-cart-${[i]}`){
            cart.push(products[i]);
        }
    }
    printToDom('cart-nav', `Cart: ${cart.length}`);
}

const addToWishlist = (e) => {
    const target = e.target.id;
    for (let i = 0; i < products.length; i++){
        if (target === `add-to-wishlist-${[i]}`){
            wishlist.push(products[i]);
        }
    }
    printToDom('wishlist-nav', `Wishlist: ${wishlist.length}`);
}

const buttonEvents = () => {
    for (let i = 0; i < products.length; i ++){
        document.querySelector(`#add-to-cart-${[i]}`).addEventListener('click', addToCart);
        document.querySelector(`#add-to-wishlist-${[i]}`).addEventListener('click', addToWishlist)
    }
}

const submitButtonClick = () => {
     document.querySelector('#submit-button').addEventListener('click',commentPush);
     document.querySelector('#submit-button').addEventListener('click',buildComment);
}

const commentPush = () => {
    let comment = {}
    comment.name = document.querySelector('#nameInput').value
    comment.email = document.querySelector('#inputEmail').value
    comment.text = document.querySelector('#exampleTextarea').value
    comments.push(comment)
}

const buildComment = () => {
    let domString = '';
    for (let i = 0; i < comments.length; i ++) {
     domString +=  
 `<section>
    <h2>Comments</h2>
    <div class="media">
      <img src="https://placehold.it/64x64" alt="Media object image">
      <div class="media-body">
        <p><a href="mailto:example@domain.com">${comments[i].name}</a> (${comments[i].email})</p>
        <p>${comments[i].text}</p>
        <button type="button" class="btn btn-sm btn-primary">Reply</button>
      </div>
      <hr>
      </section>`;

      printToDom('submitForm', domString);
}
}



const init = () => {
    if (document.URL.includes('index.html')) {
        buildCards(shuffle(products), 3, 'featured-products')
    } else if (document.URL.includes('products.html')) {
        buildCards(products, products.length, 'cardContainer');
        buttonEvents(products);
    } else if ( document.URL.includes('about.html')) {
        submitButtonClick();
    }
};

init();