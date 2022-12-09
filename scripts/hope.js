const select = document.querySelector(".select");
const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (fruitArray) {
        const fruits = fruitArray;
        // processTheFruit(fruitArray);
        
        fruits.forEach(displayFruits);
        console.log(fruits);
    });

function displayFruits(fruits) {
    let fruit = document.createElement('select');
    option.textContent = `${fruits.name}`;
}
fruits.appendChild(option);

// console.log(fruitNames);
//     console.log('name: ' + fruit.name + '\ngenus: ' + fruit.genus + '\n'}
// fruitNames.push('name');

//do somthing with the fruit array.

// console.log('name: ' + fruit.name + '\ngenus: ' + fruit.genus + '\n');
// console.log`name:${fruit.name}`
// console.log `genus:${fruit.genus}`;
// console.log('carbohydrates:' + fruit.nutritions.carbohydrates);
// console.log('protien:' + fruit.nutritions.protein);
// const fruitName = array.name;
// console.log(fruitName);
