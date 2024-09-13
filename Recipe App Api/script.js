const searchBox = document.querySelector("#searchBox");
const searchButton = document.querySelector("#searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const closeBtn = document.querySelector(".closeBtn");


// getting recipes
const getRecipes = async(input) => {

    recipeContainer.innerHTML = "<h2>Finding you the best recipes...</h2>";

    // return promise
    const data = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);

    // convert into JSON format
    const response = await data.json();
    // console.log(response.meals[0]);

    recipeContainer.innerHTML = "";

    response.meals.forEach(meal => {
        // console.log(meal);

        // creating HTML element 
        const showRecipe = document.createElement('div');
        showRecipe.classList.add('recipe');
        showRecipe.innerHTML = `
          <img src="${meal.strMealThumb}"/>
          <h3>${meal.strMeal}</h3> 
          <p>${meal.strArea} Dish</p> 
          <p>${meal.strCategory} Category</p> 
        `

        // added button to view the recipes
        const button = document.createElement("button");
        button.textContent = "View Recipe";
        showRecipe.appendChild(button);

        // adding event listner to the recent clicked dish and showing the recipe as the pop-up using the openRecipePopup() function.
        button.addEventListener('click', () => {
            openRecipePopup(meal);
        })

        // adding the recipe details with photo into the recipeContainer 
        recipeContainer.appendChild(showRecipe);
    });
}


// ingredients display logic function
const showIngredients = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if(ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }else {
            break;
        }
    }
    return ingredientsList;
}




// pop-up function logic
const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <h3>Ingredients: </h3>
    <ul>${showIngredients(meal)}</ul>
    `
    recipeDetailsContent.parentElement.style.display = "block";
}

searchButton.addEventListener('click', (e) => {
    e.preventDefault();    // stoped for auto-submission
    const searchInput = searchBox.value.trim();
    getRecipes(searchInput);
})