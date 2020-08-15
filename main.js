'use strict';

const products = [
    {
        name: 'Jodhpur Sleek 1',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    },
    {
        name: 'Jodhpur Sleek 2',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur Stylish 3',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur Sleek 4',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    },
    {
        name: 'Jodhpur Stylish 5',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur Cozy 6',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur  Roomy 7',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur Roomy 8',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur Cozy 9',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    }
];

const submit = []

const comments = [];

const cart = [];

const wishlist = [];

let slideIndex = 1;

const printToDom = (divId, textToPrint) => {
	const selectedDiv = document.getElementById(divId);
	selectedDiv.innerHTML = textToPrint;
};

const buildCards = (arr, length, divId) => {
    let domString = '';
    for (let i = 0; i < length; i++){
        if (document.URL.includes('products.html')) {
        domString += `<div id="product-${i}"class="card text-center" style="width: 331px; margin: 1%;">
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
			domString += `<div class="card text-center" style="width: 30%; margin: 1%;">
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

const buttonEvents = (arr) => {
    for (let i = 0; i < arr.length; i ++){
        document.querySelector(`#add-to-cart-${[i]}`).addEventListener('click', addToCart);
        document.querySelector(`#add-to-wishlist-${[i]}`).addEventListener('click', addToWishlist)
    }
    document.querySelector('#button-container').addEventListener('click', filterProducts)
    document.querySelector('#product-searchbar').addEventListener('input', searchProducts)
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