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
                                <a href="#" class="btn btn-primary m-1">Add to Cart</a>
                                <a href="#" class="btn btn-primary m-1">Add to Wishlist</a>
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

const buildCartProducts = () => {
    let domString = '';
    
    for (let j = 0; j < cart.length; j++) {
    domString += `<div class="card mb-3 d-flex" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4" id="containerImage" style="height: 100%;">
                        <img src="${cart[j].image}" class="card-img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${cart[j].name}</h5>
                            <p class="card-text"><small class="text-muted">#1234567890</small></p>
                            <p class="card-text">Size: </p>
                            <p class="">Price: ${cart[j].price}</p>
                        </div>
                    </div> 
                    <div class="row no-gutters"
                        <div class="col-sm-8">
                            <p class="">QTY:</p>
                            <input type="text" class="" id="inputQuantity-${j}" style="width: 20%;">
                        </div>
                        <div class="col-sm-4">
                            <button type="button" class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
            </div>`
    }
    printToDom('containerCartProducts', domString);
}

const buildOrderSummary = () => {
    let domString = '';

    domString += `<div class="" id="cardOrderSummary">
                    <div class="card mb-5" style="width: 300px;">
                        <h5 class="card-header text-center" style="background-color: #C7B8B4;">Order Summary</h5>
                        <div class="card-body">
                            <div class="row justify-content-between" id="gridContainer">
                                <div class="col-8" id="checkoutTitles">
                                    <li>Subtotal</li>
                                    <li>Savings</li>
                                    <li><strong>Estimated Total</strong></li>
                                </div>
                                <div class="col-4" id="checkoutTotals">
                                    <li>$55.00</li>
                                    <li>-$5.00</li>
                                    <li><strong>$50.00</strong></li>
                                </div>
                            </div>
                            <p class="card-text">Taxes calculated at checkout</p>
                            <div class="text-center">
                                <button class="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>`
                
    printToDom('containerOrderSummary', domString);
}

const buildWishlist = () => {
    let domString = '<h5 class="card-header text-center">Wishlist</h5>';
    
    for (let j = 0; j < products.length; j++) {
        domString += `
        <div class="row no-gutters" id="cardWishlist">
                    <div class="card mb-3 d-flex p-2 mx-2" style="max-width: 350px;">
                    <div class="row no-gutters">
                        <div class="col" id="containerImage" style="height: 100%;">
                            <img src="${products[j].image}" class="card-img">
                        </div>
                        <div class="col-4">
                            <div class="">
                                <h5 class="">${products[j].name}</h5>
                                <p class="">Price: ${products[j].price}</p>
                            </div>
                        </div> 
                            <div class="col text-right" id="wishlistBtns">
                                <button type="button" class="btn btn-danger btn-sm" id="btnRemoveFromWishlist">Remove</button>
                                <button type="button" class="btn btn-primary btn-sm" id="btnAddToCart">Add to Cart</button>
                            </div>
                    </div>
                    </div>
                    </div>
                </div>`
        }

  printToDom('containerWishlist', domString);
}

const buttonEvents = () => {
    document.querySelector("#btnCartPage").addEventListener('click', showCartPage);
}

const showCartPage = () => {

    printToDom('cardContainer', buildCartProducts);

}

const init = () => {
    buildCards();
    buttonEvents();
    // buildCartProducts();
    // buildOrderSummary();
    // buildWishlist();
};

init();