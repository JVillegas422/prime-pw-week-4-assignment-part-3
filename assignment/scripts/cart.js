console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// Add item function
function addItem( item ) {
    basket.push(item);
    return true;
}
// Testing add item function
console.log('Adding Apple: ' + addItem('apple'));
console.log('Adding Orange: ' + addItem('orange'));
console.log('Adding Banana: ' + addItem('banana'));

// List listItem function
function listItems( basket ) {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}
// Testing listItem function
listItems(basket);

// Empty basket function
function empty( basket ) {
    basket.length = 0;
    console.log(`Basket is empty. ${basket}`);
}
// Testing Basket function
empty(basket);
console.log(basket);