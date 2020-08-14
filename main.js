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

const cart = [];

const wishlist = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    console.log('divId', divId);
    console.log('textToPrint', textToPrint);
};

const childPrintToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.appendChild(textToPrint);
};

const buildCards = () => {
    let domString = '';
    for (let i = 0; i < products.length; i++){
        domString += `<div class="card text-center" style="width: 30%; margin: 1%;">
                        <h5 class="card-title mt-2">${products[i].name}</h5>
                        <img class="card-img-top" src="${products[i].image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${products[i].price}</h5>
                            <h5> Sizes: </h5>
                            <select class="form-control m-2" id="size-list-${i}">
                                ${sizeList(products[i])}
                            </select>
                            <p class="card-text">${products[i].description}</p>
                            <div class="container d-flex">
                                <a id="add-to-cart-${i}"class="btn btn-primary m-1">Add to Cart</a>
                                <a id="add-to-wishlist-${i}"class="btn btn-primary m-1">Add to Wishlist</a>
                            </div>
                        </div>
                    </div>`;
    }
    printToDom('cardContainer', domString);
}

const sizeList = (p) => {
    let domString = '';
    for (let i = 0; i < p.sizes.length; i++){
        domString += `<option class="dropdown-item" value="${p.sizes[i]}">${p.sizes[i]}</option>`
    }
    return domString;
}

const addToCart = (e) => {
    const target = e.target.id;
    for (let i = 0; i < products.length; i++){
        if (target === `add-to-cart-${[i]}`){
            let x = document.querySelector(`#size-list-${i}`);
            products[i].selectedSize = x.options[x.selectedIndex].value;
            cart.push(products[i]);
        }
        console.log("clicked");
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
                            <button type="button" class="btn btn-danger" id="btnRemoveFromCart";>Remove</button>
                        </div>
                    </div>
                </div>
            </div>`
    }

    return domString
}

const buildOrderSummary = () => {
    let domString = '';

    for (let j = 0; j < cart.length; j++)
    domString = `<div class="" id="cardOrderSummary">
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
                                    <li id="subtotal">${orderSummaryEstimate()}</li>
                                    <li id="savings">-$5.00</li>
                                    <li id="estimatedTotal"><strong>$50.00</strong></li>
                                </div>
                            </div>
                            <p class="card-text">Taxes calculated at checkout</p>
                            <div class="text-center">
                                <button class="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>`
                
    return domString
}

const buildWishlist = () => {
    let domString = '<h5 class="card-header text-center">Wishlist</h5>';
    console.log('wishlist', wishlist);
    for (let j = 0; j < wishlist.length; j++) {
        domString += `
        <div class="row no-gutters" id="cardWishlist">
                    <div class="card mb-3 d-flex p-2 mx-2" style="max-width: 350px;">
                    <div class="row no-gutters">
                        <div class="col" id="containerImage" style="height: 100%;">
                            <img src="${wishlist[j].image}" class="card-img">
                        </div>
                        <div class="col-4">
                            <div class="">
                                <h5 class="">${wishlist[j].name}</h5>
                                <select class="form-control m-2" id="size-list-${j}">
                                ${sizeList(products[j])}
                            </select>
                                <p class="">Price: ${wishlist[j].price}</p>
                            </div>
                        </div> 
                            <div class="col text-right" id="wishlistBtns">
                                <button type="button" class="btn btn-danger btn-sm" id="btnRemoveFromWishlist-${[j]}">Remove</button>
                                <button type="button" class="btn btn-primary btn-sm" id="btnAddToCartFromWishlist-${[j]}">Add to Cart</button>
                            </div>
                    </div>
                    </div>
                    </div>
                </div>`
        }

  return domString
}

const showCartPage = () => {
    printToDom('cardContainer', buildCartProducts());
    printToDom('containerOrderSummary', buildOrderSummary());
    printToDom('containerWishlist', buildWishlist());
    // buttonEvents(wishlist);

    // if (e.target.id === "wishlist-nav") {
    //     document.getElementById("wishlist-nav").classList.add("active");
    // }
    // TO DO ADD ACTIVE ON NAV
}

const showWishlistPage = () => {
    printToDom('cardContainer', buildWishlist());
    buttonEvents(wishlist);
    // document.querySelector("btnAddToCart").addEventListener('click', wishlistAddToCart);
}

const removeFromCart = (e) => {
    const target = e.target.id;
    if (e.target.id === "btnRemoveFromCart") {
        cart.splice(e.target.id, 1);
    }
    $("button").click(function(){
        $("").remove();
      });
  };

const orderSummaryEstimate = () => {
    let total = '';

    for (let i = 0; i < cart.length; i++) {
        total += parseInt(cart[i].price.substr(1),10)
        console.log('total', total);
    }
    return total;
}

const wishlistAddToCart = (e) => {
    const target = e.target.id;
    for (let i = 0; i < products.length; i++){
        if (target === `btnAddToCartFromWishlist-${[i]}`){
            cart.push(products[i]);
        }
        buttonEvents(wishlist);
    }

    printToDom('cart-nav', `Cart: ${cart.length}`);
}

const removeFromWishlist = (e) => {
    const target = e.target.id;
    for (let i = 0; i < wishlist.length; i++){
        if (target === `btnRemoveFromWishlist-${[i]}`){
            wishlist.splice(target, 1);
        }
        buttonEvents(wishlist);
        console.log("remove")

    }
    console.log(wishlist);
    printToDom('cardContainer', buildWishlist());
}


    // const target = e.target.id;
    // if (e.target.id === "btnRemoveFromCart") {
    //     cart.splice(e.target.id, 1);
    // }
    // const ctype = e.target.type;
    // const target = e.target.id;

    // if (ctype === 'button') {
    //     products.splice(target, 1);

    //     buildWishlist(products[i]);


const buttonEvents = (arr) => {
    document.querySelector("#cart-nav").addEventListener('click', showCartPage);
    document.querySelector("#wishlist-nav").addEventListener('click', showWishlistPage);
    if (arr === products) {
    for (let i = 0; i < arr.length; i ++){
        document.querySelector(`#add-to-cart-${[i]}`).addEventListener('click', addToCart);
        document.querySelector(`#add-to-wishlist-${[i]}`).addEventListener('click', addToWishlist);
    }
} else if (arr === wishlist) {
    for (let i = 0; i < arr.length; i ++){
        document.querySelector(`#btnAddToCartFromWishlist-${[i]}`).addEventListener('click', wishlistAddToCart);
        document.querySelector(`#btnRemoveFromWishlist-${[i]}`).addEventListener('click', removeFromWishlist);
    }
}
    // document.querySelector("#btnRemoveFromCart").addEventListener('click', removeFromCart);
}

const init = () => {
    buildCards();
    buttonEvents(products);
    // orderSummaryEstimate();
    // removeFromCart();
};

init();