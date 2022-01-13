// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [{
            id: 1,
            name: 'cooking oil',
            price: 10.5,
            type: 'grocery'
        },
        {
            id: 2,
            name: 'Pasta',
            price: 6.25,
            type: 'grocery'
        },
        {
            id: 3,
            name: 'Instant cupcake mixture',
            price: 5,
            type: 'grocery'
        },
        {
            id: 4,
            name: 'All-in-one',
            price: 260,
            type: 'beauty'
        },
        {
            id: 5,
            name: 'Zero Make-up Kit',
            price: 20.5,
            type: 'beauty'
        },
        {
            id: 6,
            name: 'Lip Tints',
            price: 12.75,
            type: 'beauty'
        },
        {
            id: 7,
            name: 'Lawn Dress',
            price: 15,
            type: 'clothes'
        },
        {
            id: 8,
            name: 'Lawn-Chiffon Combo',
            price: 19.99,
            type: 'clothes'
        },
        {
            id: 9,
            name: 'Toddler Frock',
            price: 9.99,
            type: 'clothes'
        }
    ]
    // Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    //Loop to add items to CartList (send an object with its ID number)
    for (var i = 0; i < products.length; i++) {

        if (products[i].id === id) {

            cartList.push(products[i]); // use push() method to add a product to cartList



            console.log('array cart added:', cart);
            console.log('array cartList item added:', cartList);
            console.log('cart subtotal added:', subtotal);
            //console.log('cart total added is:', total);

        }

    }


    console.log(cartList);


}

// Exercise 2
function cleanCart() {
    //call to calculate subtotals and make empty the modal cart
    cartList = []
    cart = []


    calculateSubtotals(); // <--- Make it for exercise n.3

    //print to Cart()
    console.log('cart empty', cart);
    console.log('cartList empty', cartList);
    console.log('subtotal', subtotal);
    console.log('total', total);
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    //Make a reset to initialize
    for (let category in subtotal) {
        subtotal[category].value = 0
        subtotal[category].discount = 0
    }
    console.log(cartList)

    for (const product of cartList) {
        subtotal[product.type].value += product.price
            //subtotal['clothes'].value = subtotal['clothes'].value + product.price
    }



    //loop for change in decimals the result //subtotal =>  array for any category
    for (let category in subtotal) {

        subtotal[category].value = subtotal[category].value.toFixed(2) // add toFixed method to print decimal result 
    }

    applyPromotionsCart();


}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    //initialize variable total = 0;
    let total = 0;

    cartList.forEach(item => {

        total = total + item.price;
        //total += item.price

    });

    console.log("The total price of items selected is:" + ' ' + total);




}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    //console.log(cart);
    console.log(cartList);

    // initialize variable = 0;
    var i = 0;
    //declare variable cart array 
    var cart = [];

    //array method througth cartList array
    cartList.forEach(function(item) {

        if (cart.includes(cartList[i])) {

            item.quantity++;

        } else {

            item.quantity = 1;

            cart.push(item);
            console.log('cart item added is:', cart);
        }
        i++;
    });
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let disc_value = 100; //<--define a variable to count the percentage




    for (let category in subtotal) {
        //subtotal[category].value = 0
        subtotal[category].discount = 10; //<--define the amount of the discount (in thi case is: 10%)
    }


    //loop throughtout products array objects 
    for (const product of cartList) {

        //retrive as a const the subtotal array keys to calculate the discount of any product
        const promotion_item = ((subtotal[product.type].discount * product.price) / disc_value)

        disc_item = product.price - promotion_item; //<--define the subtraction to calculate the final value of discount products.
    }


    console.log("The item discounted has a price of:" + ' ' + disc_item.toFixed(2)); //<--print the result of the discount




}

// Exercise 7 
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let cart = [];




    //loop throughtout products array objects 
    cartList.forEach(item => {



        add_cart = cart.push(item);


    });

    //print on console
    console.log("The total items added to the cart are:" + ' ' + add_cart);

}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    //loop throughtout products array objects
    cartList.forEach(item => {

        //define const to remove the last item from array objects
        cartList_removed = cartList.slice(0, cartList.length - 1); // splice method to remove the last element removed


    });

    //print on console
    console.log("The items left in the list are:");
    console.log(cartList_removed); //<--print in console items left in the cart





}


// Exercise 10
// function printCart() {
//     // Fill the shopping cart modal manipulating the shopping cart dom
//     //define products to print inside the container

//     // var print_item = document.getElementsByClassName('card col-sm-3 m-1 ml-5 p-4');
//     // console.log(print_item);


//     let cart = [];
//     var selected_item =




//         //loop throughtout products array objects 
//         cartList.forEach(item => {



//             add_cart = cart.push(item);


//         });

// }


//---MANIPULATION DOM---//

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn btn-danger ml-2');
    //console.log(removeCartItemButtons);

    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)


    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartbuttons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartbuttons.length; i++) {
        var button = addToCartbuttons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn btn-primary btn purchase')[0].addEventListener('click', purchaseClicked);

}

function purchaseClicked() {
    alert('Thank you for your purchase');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
}


function removeCartItem(e) {
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal(); //<--add to the loop the function when button is clicked!

}

function quantityChanged(e) {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    updateCartTotal();

}

function addToCartClicked(e) {
    var button = e.target;
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-item-title')[0].innerText;
    console.log(title);
    var price = shopItem.getElementsByClassName('card-item-price')[0].innerText;
    console.log(price);
    var imageSrc = shopItem.getElementsByClassName('grocery-img')[0].src;
    console.log(imageSrc);
    addItemToCart(title, price);
    updateCartTotal(); //<--add the price of any items clicked
}


function addItemToCart(title, price) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row'); //<--add all the details inside cart-row
    //cartRow.innerText = title;

    //--this below doesn't work well--//
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemsNames = cartItems.getElementsByClassName('card-item-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart!');
            return
        }
    }
    //--this above doesn't work well--//


    var cartRowContents = `
    <div class="cart-item cart-column">
    <img src="./images/product.svg" class="grocery-img" style="margin-left:-50px;" width="50" height="50">

</div>
<div class="container-column float-right mr-4" style="margin-top: -75px;">
    <span class="car-item-title" style="margin-left:145px;">${title}</span>
    <span class="cart-price cart-column pt-2"><b>${price}</b></span>
    <div class="cart-quantity">
        <input style="width:60px; margin-left:80px;" type="number" class="cart-quantity-input mt-2" value="1">
        <button style="padding-top: 3px; padding-bottom: 3px;margin-top: -2px;" class="btn btn-danger ml-2 mt-2 float-right">Remove</button>
   
    </div>
    <hr>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow); //<--append to the end of cart the added items
    cartRow.getElementsByClassName('btn btn-danger ml-2')[0].addEventListener('click', removeCartItem); //<--add functionality to remove items from cart
    cartRow.getElementsByClassName('cart-quantity-input mt-2')[0].addEventListener('click', quantityChanged);
}




//--Update Cart Total--//

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;


    for (var i = 0; i < cartRows.length; i++) {

        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price cart-column pt-2')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input mt-2')[0];

        //Price
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        //Quantity
        var quantity = quantityElement.value
        total = total + (price * quantity);


    }
    //total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toFixed(2);

}