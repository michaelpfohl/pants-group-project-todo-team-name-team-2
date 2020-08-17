'use strict';

const products = [
    {
        name: 'Jodhpur Sleek 1',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    },
    {
        name: 'Jodhpur Sleek 2',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur Stylish 3',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur Sleek 4',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    },
    {
        name: 'Jodhpur Stylish 5',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur Cozy 6',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur  Roomy 7',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur Roomy 8',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur Cozy 9',
        price: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    }
];

const replies = [];

const comments = [];

const cart = [];

const wishlist = [];

let slideIndex = 0;

const printToDom = (divId, textToPrint) => {
	const selectedDiv = document.getElementById(divId);
	selectedDiv.innerHTML = textToPrint;
};

const buildCards = (arr, length, divId) => {
    let domString = '';
    for (let i = 0; i < length; i++){
        if (document.URL.includes('products.html')) {
        domString += `<div id="product-${i}"class="card text-center product--card" style="width: 331px; margin: 1%;">
                        <h5 class="card-title mt-2">${arr[i].name}</h5>
                        <img class="card-img-top" src="${
													arr[i].image
												}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${arr[i].price}</h5>
                            <h5> Sizes: </h5>
                            <select class="form-control m-2" id="size-list-${i}">
                                ${sizeList(arr[i])}
                            </select>
                            <p class="card-text">${arr[i].description}</p>
                            <div class="container d-flex">
                                <a id="add-to-cart-${i}"class="btn btn-primary m-1">Add to Cart</a>
                                <a id="add-to-wishlist-${i}"class="btn btn-primary m-1">Add to Wishlist</a>
                            </div>
                        </div>
                    </div>`;
        } else if (document.URL.includes('index.html')) {
            domString += `<div class="card text-center product--card" style="width: 30%; margin: 1%;">
                        <h5 class="card-title mt-2">${arr[i].name}</h5>
                        <img class="card-img-top" src="${arr[i].image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${arr[i].price}</h5>
                            <p class="card-text">${arr[i].description}</p>
                        </div>
                    </div>`;
		}
	}
	printToDom(divId, domString);
};

const shuffle = (arr) => {
	return arr.sort(() => Math.random() - 0.5);
};

const sizeList = (p) => {
	let domString = '';
	for (let i = 0; i < p.sizes.length; i++) {
		domString += `<option class="dropdown-item" value="${p.sizes[i]}">${p.sizes[i]}</option>`;
	}
	return domString;
};

const addToCart = (e) => {
	const target = e.target.id;
	for (let i = 0; i < products.length; i++) {
		if (target === `add-to-cart-${[i]}`) {
			let x = document.querySelector(`#size-list-${i}`);
			products[i].selectedSize = x.options[x.selectedIndex].value;
			cart.push(products[i]);
		}
	}
	printToDom('cart-nav', `Cart: ${cart.length}`);
};

const addToWishlist = (e) => {
	const target = e.target.id;
	for (let i = 0; i < products.length; i++) {
		if (target === `add-to-wishlist-${[i]}`) {
			wishlist.push(products[i]);
		}
	}
	printToDom('wishlist-nav', `Wishlist: ${wishlist.length}`);
};

const filterProducts = (e) => {
	const target = e.target.id;
	const selectedProducts = [];
	for (let i = 0; i < products.length; i++) {
		if (products[i].type === target) {
			selectedProducts.push(products[i]);
		}
	}
	if (target === e.currentTarget.id) {
		return;
	} else if (target === 'all') {
		buildCards(products, products.length, 'cardContainer');
		buttonEvents(products);
	} else {
		buildCards(selectedProducts, selectedProducts.length, 'cardContainer');
		buttonEvents(selectedProducts);
	}
};

const searchProducts = (e) => {
    const searchedProducts = [];
    let search = e.target.value.toLowerCase();
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(search)){
            searchedProducts.push(products[i]);
        }
    }
    buildCards(searchedProducts, searchedProducts.length, 'cardContainer');
}

const buildCartProducts = () => {
    let domString = '';
    
    for (let j = 0; j < cart.length; j++) {
    domString += `
    <div class="card mb-3 d-flex" style="max-width: 540px; id="inCartProducts"">
                <div class="row no-gutters p-3 my-2">
                    <div class="col" id="containerImage" style="height: 100%;">
                        <img src="${cart[j].image}" class="card-img">
                    </div>
                    <div class="col-sm">
                        <div class="card-body">
                            <h5 class="card-title">${cart[j].name}</h5>
                            <p class="card-text">Size: ${cart[j].selectedSize}</p>
                            <p class="">Price: $${cart[j].price}</p>
                        </div>
                    </div>
                        <div class="col align-self-end text-right">
                            <button type="button" class="btn btn-danger" id="btnRemoveFromCart-${[j]}";>Remove</button>
                        </div>
                </div>
            </div>`
    }

    return domString
}

const buildOrderSummary = () => {
    let domString = '';

    domString = `<div class="" id="cardOrderSummary">
                    <div class="card mb-5" style="width: 300px;">
                        <h5 class="card-header text-center" style="background-color: #C7B8B4;">Order Summary</h5>
                        <div class="card-body">
                            <div class="d-flex justify-content-center mx-4 mb-4" id="gridContainer">
                                <div class="col-sm" id="checkoutTitles">
                                    <li>Subtotal</li>
                                    <li>Tax</li>
                                    <li><strong>Total</strong></li>
                                </div>
                                <div class="col-sm text-right" id="checkoutTotals" style>
                                    <li id="subtotal">$${orderSummarySubtotal()}</li>
                                    <li id="tax">$${calculateSalesTax()}</li>
                                    <li id="estimatedTotal"><strong>$${orderSummaryTotal()}</strong></li>
                                </div>
                            </div>
                            <div class="text-center mt-3">
                                <button class="btn btn-primary px-5">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>`
                
    return domString
}

const buildWishlist = () => {
    let domString = '';

    for (let j = 0; j < wishlist.length; j++) {
        domString += `
        <div class="" id="cardWishlist">
                    <div class="card d-flex p-3 my-2" style="max-width: 350px;">
                    <div class="row no-gutters">
                        <div class="col" id="containerImage" style="height: 100%;">
                            <img src="${wishlist[j].image}" class="card-img">
                        </div>
                        <div class="col-sm">
                            <div class="">
                                <h5 class="">${wishlist[j].name}</h5>
                                <p class="card-text">Size: ${wishlist[j].selectedSize}</p>
                                <p class="">Price: ${wishlist[j].price}</p>
                            </div>
                        </div> 
                            <div class="col text-right" id="wishlistBtns">
                                <button type="button" class="btn btn-danger btn-sm" id="btnRemoveFromWishlist-${[j]}">Remove</button>
                                <button type="button" class="btn btn-primary btn-sm mt-5" id="btnAddToCartFromWishlist-${[j]}">Add to Cart</button>
                            </div>
                    </div>
                    </div>
                    </div>
                </div>`
        }

  return domString
}

const showCartPage = (e) => {
    for (let j = 0; j < products.length; j++) {
        document.getElementById("cardContainer").style.visibility = "hidden";
        document.getElementById("containerWishlistPage").style.display = "none";
        document.getElementById("containerCartProducts").style.display = "block";
        document.getElementById("containerOrderSummary").style.display = "block";
    }
    // for (let j = 0; j < products.length; j++) {
    //     document.getElementById("containerWishlistPage").style.visibility = "hidden";
    // }
    if (cart.length === 0) {
        noItemsInCart();
    } else {
        printToDom('containerCartProducts', buildCartProducts());
        printToDom('containerOrderSummary', buildOrderSummary());
    }
    // if (e.target.id === "cart-nav") {
    //     document.getElementById("cart-nav").classList.add("active");
    // }
    // TO DO ADD ACTIVE ON NAV
}

const showWishlistPage = (e) => {
    for (let j = 0; j < products.length; j++) {
    document.getElementById("cardContainer").style.visibility = "hidden";
    document.getElementById("containerCartProducts").style.display = "none";
    document.getElementById("containerOrderSummary").style.display = "none";
    document.getElementById("containerWishlistPage").style.display = "block";
    }

    // for (let k = 0; k < products.length; k++) {
    //     document.getElementById("containerCartWishlistPage").style.visibility = "hidden";
    //     }

    printToDom('containerWishlistPage', buildWishlist());
    buttonEvents(wishlist);
    noItemsInWishlist();
}

const buildNoItemsInWishlist = () => {
    let domString = '';

    domString = `<div class="alert alert-success text-center" role="alert">
                    <h4 class="alert-heading">There are no items in your Wishlist!</h4>
                    <hr>
                    <p class="mb-0">Head over to the Products page to start adding to your Wishlist!</p>
                </div>`
    
    return domString;

}

const buildNoItemsInCart = () => {
    let domString = '';

    domString = `<div class="alert alert-success text-center" role="alert">
                    <h4 class="alert-heading">There are no items in your Cart!</h4>
                    <hr>
                    <p class="mb-0">Head over to the Products page to start adding to your Cart!</p>
                </div>`
    
    return domString;

}

const removeFromCart = (e) => {
    const target = e.target.id;
    for (let i = 0; i < cart.length; i++){
        if (target === `btnRemoveFromCart-${[i]}`){
            cart.splice(target,1);
        }
    }
    printToDom('containerCartProducts', buildCartProducts());
    printToDom('cart-nav', `Cart: ${wishlist.length}`);
    buttonEvents(cart);
    noItemsInCart();
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
            wishlist.splice(target,1);
        }
    }
    printToDom('containerWishlistPage', buildWishlist());
    printToDom('wishlist-nav', `Wishlist: ${wishlist.length}`);
    buttonEvents(wishlist);
    noItemsInWishlist();
}

const noItemsInWishlist = () => {
    if (wishlist.length === 0) {
        printToDom('wishlist-nav', `Wishlist`);
        printToDom('containerNoItemsInWishlist', buildNoItemsInWishlist());
    }
}

const noItemsInCart = () => {
    if (cart.length === 0) {
        printToDom('cart-nav', `Cart`);
        printToDom('containerNoItemsInCart', buildNoItemsInCart());
    }
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

    let tax = 0;
    let subtotal = 0;
  
  const orderSummarySubtotal = () => {
      for (let i = 0; i < cart.length; i++) {
          subtotal += cart[i].price
      }
      return subtotal;
  }
  
  const calculateSalesTax = () => {
      tax = subtotal * 0.07
  
      return tax.toFixed(2);
  }
  
  const orderSummaryTotal = () => {
      let total = 0;
     
      total = subtotal + tax
  
      return total.toFixed(2);
  } 

const buttonEvents = (arr) => {
    document.querySelector("#cart-nav").addEventListener('click', showCartPage);
    document.querySelector("#wishlist-nav").addEventListener('click', showWishlistPage);
    if (arr === products) {
const buttonEvents = (arr) => {
    for (let i = 0; i < arr.length; i ++){
        document.querySelector(`#add-to-cart-${[i]}`).addEventListener('click', addToCart);
        document.querySelector(`#add-to-wishlist-${[i]}`).addEventListener('click', addToWishlist);
    }
} else if (arr === wishlist) {
    for (let i = 0; i < arr.length; i ++){
        document.querySelector(`#btnAddToCartFromWishlist-${[i]}`).addEventListener('click', wishlistAddToCart);
        document.querySelector(`#btnRemoveFromWishlist-${[i]}`).addEventListener('click', removeFromWishlist);
    }
} else if (arr === cart) {
    for (let i = 0; i < arr.length; i ++) {
        document.querySelector(`#btnRemoveFromCart-${[i]}`).addEventListener('click', removeFromCart);
    }
    document.querySelector('#button-container').addEventListener('click', filterProducts)
    document.querySelector('#product-searchbar').addEventListener('input', searchProducts)
}

const submitButtonClick = () => {
     document.querySelector('#submit-button').addEventListener('click',commentPush);
     document.querySelector('#submit-button').addEventListener('click',buildComment);
}

const replyButtonClick = () => {
    for (let i = 0; i < comments.length; i++){
    document.querySelector(`#reply-button${i}`).addEventListener('click', replyToComment);
}
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
        <div>${comments[i].text}</div>
        <div id="comment${i}"></div>
        <a id="reply-button${i}" class="btn btn-sm btn-primary">Reply</a>
      </div>
      <hr>
      </section>
      <div id="reply${i}">
      </div>
      `;

      printToDom('submitForm', domString);
      replyButtonClick();
}
}


const commentBtnClick = (id) => {
    document.querySelector(`#comment-button${id}`).addEventListener('click', () => {

        // WHEN COMMENT BUTTON IS PRESSED... 

        // 1. GRAB COMMENT INPUT VALUE
        let inputText = document.querySelector(`#commentTextArea${id}`).value

        // 2. CREATE A DOM ELEMENT 
        let node = document.createElement("P"); 
        let textnode = document.createTextNode(`${inputText}`);
        node.appendChild(textnode);

        // 3. APPEND DOM ELEMENT TO COMMENTS DIV
        document.querySelector(`#comment${id}`).appendChild(node)

        // 4. CLEAR INPUT VALUE
        document.querySelector(`#commentTextArea${id}`).value = ''

        // 5. REMOVE COMMENT IMPUT AND BUTTON
        document.querySelector(`#reply${id}`).innerHTML = ''
    })
}

const replyToComment = (e) => {
    const target = e.target.id;
    let domString = '';
	for (let i = 0; i < comments.length; i++) {
		if (target === `reply-button${i}`) {
            domString +=`<textarea class="form-control" id="commentTextArea${i}" rows="1"></textarea>`
            domString += `<a id="comment-button${i}" class="btn btn-sm btn-primary">Comment</a>`
            printToDom(`reply${i}`,domString);
            commentBtnClick(i)
        }
    }
	}


const slideButtonListener = () => {
	document.getElementById('slide-right').addEventListener('click', function () {
		showSlide((slideIndex += 1));
	});
	document.getElementById('slide-left').addEventListener('click', function () {
		showSlide((slideIndex += -1));
	});
};


const showSlide = (n) => {
    const selectedDiv = document.getElementsByClassName('review-slide');
	for (let i = 0; i < selectedDiv.length; i++) {
        selectedDiv[i].style.display = 'none';
    }
    selectedDiv[Math.abs(n) % selectedDiv.length].style.display = 'block';
};

const init = () => {
    buildCards();
    buttonEvents(products);
	if (document.URL.includes('index.html')) {
		buildCards(shuffle(products), 3, 'featured-products');
		showSlide(slideIndex);
		slideButtonListener();
	} else if (document.URL.includes('products.html')) {
		buildCards(products, products.length, 'cardContainer');
		buttonEvents(products);
	} else if ( document.URL.includes('about.html')) {
        submitButtonClick();
    }
};

init();