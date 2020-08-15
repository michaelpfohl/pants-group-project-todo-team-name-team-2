'use strict';

const products = [
    {
        name: 'Jodhpur 1',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    },
    {
        name: 'Jodhpur 2',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur 3',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur 4',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'traditional'
    },
    {
        name: 'Jodhpur 5',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur 6',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'experimental'
    },
    {
        name: 'Jodhpur 7',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur 8',
        price: '$20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://d2fzf9bbqh0om5.cloudfront.net/images/680583/main/pirate-dressing-archibald-jodhpur-pants-pants.jpg?1548933562',
        sizes: [4,5,6,7,8,9],
        type: 'modern'
    },
    {
        name: 'Jodhpur 9',
        price: '$20',
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

const printToDom = (divId, textToPrint) => {
	const selectedDiv = document.getElementById(divId);
	selectedDiv.innerHTML = textToPrint;
};

const buildCards = (arr, length, divId) => {
    let domString = '';
    for (let i = 0; i < length; i++){
        if (document.URL.includes('products.html')) {
        domString += `<div class="card text-center" style="width: 331px; margin: 1%;">
                        <h5 class="card-title mt-2">${arr[i].name}</h5>
                        <img class="card-img-top" src="${arr[i].image}" alt="Card image cap">
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

const shuffle = arr => {
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
    for (let i = 0; i < products.length; i++){
        if(products[i].type === target){
            selectedProducts.push(products[i]);
        }
    }
    if (target === e.currentTarget.id){
        return 
    } else if (target === "all"){
        buildCards(products, products.length, 'cardContainer');
        buttonEvents(products);
    } else {
        buildCards(selectedProducts, selectedProducts.length, 'cardContainer');
        buttonEvents(selectedProducts);
    }
}

const buttonEvents = (arr) => {
    for (let i = 0; i < arr.length; i ++){
        document.querySelector(`#add-to-cart-${[i]}`).addEventListener('click', addToCart);
        document.querySelector(`#add-to-wishlist-${[i]}`).addEventListener('click', addToWishlist)
    }
    document.querySelector("#button-container").addEventListener('click', filterProducts)
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
