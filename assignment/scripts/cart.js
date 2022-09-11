console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// Part of Stretch Goals
const maxItems = 5;

// Part of Stretch Goals
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

// Add item function
// function addItem( item ) {
//     basket.push(item);
//     return true;
// }

// Updated addItem w/isFull function
function addItem( item ) {
    if (isFull() === true) {
        console.log('Basket is full!');
        return false;
    } else {
        basket.push(item);
        return true;
    }
}
// Testing add item function
console.log('Adding Apple: ' + addItem('apple'));
console.log('Adding Orange: ' + addItem('orange'));
console.log('Adding Banana: ' + addItem('banana'));
console.log('Adding Grapes: ' + addItem('grapes'));
console.log('Adding Plum: ' + addItem('plum'));
console.log('Adding Peach: ' + addItem('peach'));

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
