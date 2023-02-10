import { renderRecipes } from "./renderRecipes.js";
import { searchRecipes } from "./searchRecipes.js";


const searchHeader = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': '0d16881974mshb10bb68b2ec1d54p1e4c71jsnecf221038b88',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const searchList = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100&tags";

async function getRecipes() {
  try {
    let response = await fetch(searchList, searchHeader);
    let results = await response.json();
    console.log(results);

    renderRecipes(results.recipes);
    searchRecipes(results.recipes);
    
  } catch (error) {
    console.log("An error occured");
    recipeContainer.innerHTML = displayError("An error occured when calling the API");
  }
}

getRecipes();