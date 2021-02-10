// write your code here
const spiceUrl =   'http://localhost:3000/spiceblends'
const ingredientsUrl = ' http://localhost:3000/ingredients'
const sBDetail = document.querySelector('div#spice-blend-detail')
let ingredientsArray = []
const ingredientsHtml = document.querySelector('ul.ingredients-list')


fetchAllSpice()




function fetchAllSpice(){
    fetch(spiceUrl)
    .then(response => response.json())
    .then(spices => showSpice1(spices[0]));
    
}

function showSpice1(spice){
    idHelper = spice.id
    sBDetail.innerHTML = `
    <img class="detail-image" src=${spice.image} alt=${spice.title} />
      <h2 class="title">${spice.title}</h2>

      <div class="ingredients-container">
      <h4>Ingredients:</h4>
      <ul class="ingredients-list">
        <!-- Add Spice Blend Ingredients Here -->
        </ul>
        </div>
        `
        fetchAllIngredeients(idHelper)
        ingredientsList()
    }
    
    function fetchAllIngredeients(idHelper){
        fetch(ingredientsUrl)
        .then(response => response.json())
        .then(ingredients => {
            ingredientsList(ingredients, idHelper)})
        }
        
        function ingredientsList(ingredients, idHelper){
        let wholeArray= ingredients
        ingredientsArray = []
        let addto = wholeArray.filter(function (el) {
            return el.spiceblendId === idHelper   })
            ingredientsArray.push(addto)
            insertIngredients()
    }

    function insertIngredients(){
        console.log("ingredients", ingredientsArray[0])
        ingredientsArray[0].forEach(ingredient => {
            const li = document.createElement('li')
            console.log(ingredient)
            li.dataset.id = ingredient.id
            li.textContent = ingredient.name
            ingredientsHtml.append(li)

    })
    console.log(ingredientsHtml)
}
