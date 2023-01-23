import { renderRecipes } from "./renderRecipes.js";

export function searchRecipes(recipes) {

  const search = document.querySelector(".search");
  
  search.onkeyup = function(event) {
   
  event.preventDefault();

   const searchValue = event.target.value.trim().toLowerCase();
   
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

   });
    console.log(filteredRecipes);
   renderRecipes(filteredRecipes);
   };
}

