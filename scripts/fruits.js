let fruit1, fruit2, fruit3;
let fruitList = [];
let combinedNutrition;
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (fruitArray) {
    processTheFruit(fruitArray)
  })

function processTheFruit(fruitArray) {
  fruitList = fruitArray;
  fruitArray.forEach(fruit => {
 
    //populate dropdowns
    let select = document.getElementsByTagName('select')
    for (select of select) {
      for (let i = 0; i < 1; i++) {
        let option = document.createElement('OPTION');
        let txt = document.createTextNode(fruit.name);
        option.value = fruit.id;
        
        option.appendChild(txt)
        select.insertBefore(option, select.lastChild)
      }
    }
  })
}

function showInput() {
  document.getElementById('display').innerHTML = document.getElementById('userName').value;
  document.getElementById('display2').innerHTML = document.getElementById('userEmail').value;
  document.getElementById('display3').innerHTML = document.getElementById('userPhone').value;
  document.getElementById('date2').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
 
  
}
let selection = document.getElementById('fruit1');
let result = document.querySelector("#fruitfirst");

selection.addEventListener('change', () => {
  let id = selection.value;
  result.innerText = selection.options[selection.selectedIndex].text;
  fruit1 = getFruitById(id);
  computeNutrition();

});
let selection2 = document.getElementById('fruit2');
let result2 = document.querySelector('#fruitsecond');

selection2.addEventListener('change', () => {
  let id = selection2.value;
  result2.innerText = selection2.options[selection2.selectedIndex].text;
  fruit2 = getFruitById(id);
  computeNutrition();
});

let selection3 = document.getElementById('fruit3');
let result3 = document.querySelector('#fruitthird');

selection3.addEventListener('change', () => {
  let id = selection3.value;
  result3.innerText = selection3.options[selection3.selectedIndex].text;
  fruit3 = getFruitById(id);
  computeNutrition();
});

function getText() {
  let instructions = document.getElementById('instructions').value;
  display_instructions.innerHTML = instructions;
}

function getFruitById(id) {
  return fruitList.find(fruit => {
    return fruit.id == id;

  }); 
}
function computeNutrition() {
  combinedNutrition = {
    carbs: 0, 
    protein: 0,  
    fat: 0,  
    sugar: 0,  
    calories: 0,  
  }
  if (fruit1) {
    addNutrition(fruit1.nutritions);
  }
  if (fruit2) {
    addNutrition(fruit2.nutritions);
  }
  if (fruit3) {
    addNutrition(fruit3.nutritions);
  }
  console.log(combinedNutrition);
  displayNutrition();
}
function addNutrition(nutrition) {
  combinedNutrition.carbs += nutrition.carbohydrates;
  combinedNutrition.protein += nutrition.protein;
  combinedNutrition.fat += nutrition.fat;
  combinedNutrition.sugar += nutrition.sugar;
  combinedNutrition.calories += nutrition.calories;
}
function displayNutrition() {
  document.getElementById('carbs').innerHTML = combinedNutrition.carbs.toFixed(2);
  document.getElementById('protein').innerHTML = combinedNutrition.protein.toFixed(2);
  document.getElementById('fat').innerHTML = combinedNutrition.fat.toFixed(2);
  document.getElementById('sugar').innerHTML = combinedNutrition.sugar.toFixed(2);
  document.getElementById('calories').innerHTML = combinedNutrition.calories.toFixed(2);
  
}
function orderCounter() {
  if (typeof (Storage) !== "undefined") {
    localStorage.orderCount = Number(localStorage.orderCount) + 1;
  } else {
    localStorage.orderCount = 1;
  }
  document.getElementById('smoothiesord').innerHTML = `<strong>Total Number of Smoothies Ordered:</strong> ${localStorage.orderCount}`;
}




