'use strict';

const products = [
	{
		name: 'Jodhpur 1',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'traditional',
	},
	{
		name: 'Jodhpur 2',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'modern',
	},
	{
		name: 'Jodhpur 3',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'experimental',
	},
	{
		name: 'Jodhpur 4',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'traditional',
	},
	{
		name: 'Jodhpur 5',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'experimental',
	},
	{
		name: 'Jodhpur 6',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'experimental',
	},
	{
		name: 'Jodhpur 7',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'modern',
	},
	{
		name: 'Jodhpur 8',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'modern',
	},
	{
		name: 'Jodhpur 9',
		price: '$20',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image:
			'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
		sizes: [4, 5, 6, 7, 8, 9],
		type: 'traditional',
	},
];

const cart = [];

const wishlist = [];

let slideIndex = 1;

const printToDom = (divId, textToPrint) => {
	const selectedDiv = document.getElementById(divId);
	selectedDiv.innerHTML = textToPrint;
};

const buildCards = (arr, length, divId) => {
	let domString = '';
	for (let i = 0; i < length; i++) {
		if (document.URL.includes('products.html')) {
			domString += `<div class="card text-center" style="width: 331px; margin: 1%;">
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

const buttonEvents = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		document
			.querySelector(`#add-to-cart-${[i]}`)
			.addEventListener('click', addToCart);
		document
			.querySelector(`#add-to-wishlist-${[i]}`)
			.addEventListener('click', addToWishlist);
	}
	document
		.querySelector('#button-container')
		.addEventListener('click', filterProducts);
};

const showSlide = (n) => {
	const selectedDiv = document.getElementsByClassName('review-slide');
	if (n > selectedDiv.length) {
		slideIndex = 1;
	} else if (n < 1) {
		slideIndex = selectedDiv.length;
	}
	for (let i = 0; i < selectedDiv.length; i++) {
		selectedDiv[i].style.display = 'none';
	}
	selectedDiv[slideIndex - 1].style.display = 'block';
};

const slideRight = () => {
	showSlide((slideIndex += 1));
};

const slideLeft = () => {
	showSlide((slideIndex += -1));
};

const slideButtonListener = () => {
	document.getElementById('slide-left').addEventListener('click', slideLeft);
	document.getElementById('slide-right').addEventListener('click', slideRight);
};

const init = () => {
	if (document.URL.includes('index.html')) {
		buildCards(shuffle(products), 3, 'featured-products');
		showSlide(slideIndex);
		slideButtonListener();
	} else if (document.URL.includes('products.html')) {
		buildCards(products, products.length, 'cardContainer');
		buttonEvents(products);
	}
};

init();
