  import { renderRecipes } from "./renderRecipes.js";

export function searchRecipes(recipes) {

  const search = document.querySelector(".search");
  const searchButton = document.querySelector(".search-button");
  
  searchButton.onclick = function() {
   
  event.preventDefault();

  console.log(search.value);

   const searchValue = search.value.trim().toLowerCase();
   
   const filteredRecipes = recipes.filter(function (recipeToRender) {
    if (recipeToRender.title.toLowerCase().includes(searchValue)) {
      return true;       
    }

    for (let i = 0; i < recipeToRender.diets.length; i++) {
      if (recipeToRender.diets[i].toLowerCase().includes(searchValue)) {
        return true;
      }
    }

    for (let i = 0; i < recipeToRender.extendedIngredients.length; i++) {
      if (recipeToRender.extendedIngredients[i].name.toLowerCase().includes(searchValue)) {
        return true;
      }
    }

   })   
    console.log(filteredRecipes);
   renderRecipes(filteredRecipes);
  }
};

