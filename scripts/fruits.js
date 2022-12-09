const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (fruitArray) {
    processTheFruit(fruitArray)
  })

function processTheFruit (fruitArray) {
  fruitArray.forEach(fruit => {
    //do something with the fruit in fruitArray.
    console.log(fruit.name)
  
    let select = document.getElementsByTagName('select')
    for (select of select) {
      for (let i = 0; i < 1; i++) {
        let option = document.createElement('OPTION'),
          txt = document.createTextNode(fruit.name)
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
  // document.getElementById('carbs').innerHTML = document.getElementById('fruit1').value;
}
function showFruit1() {
  selectElement = document.querySelector('#fruit1');
  output = selectElement.value;
  document.querySelector('.carbs').textContent = output;
}
