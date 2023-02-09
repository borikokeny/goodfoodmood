import { renderRecipes } from "./renderRecipes.js";

export function searchRecipesDesk(recipesDesk) {

  const searchDesk = document.querySelector(".desktop-view-search");
  const searchButtonDesk = document.querySelector(".desktop-search-button");
  
  searchButtonDesk.onclick = function() {
   
  event.preventDefault();

   const searchValueDesk = searchDesk.value.trim().toLowerCase();
   
   const filteredRecipesDesk = recipesDesk.filter(function (recipeToRender) {
    if (recipeToRender.title.toLowerCase().includes(searchValueDesk)) {
      return true;       
    }

    for (let i = 0; i < recipeToRender.diets.length; i++) {
      if (recipeToRender.diets[i].toLowerCase().includes(searchValueDesk)) {
        return true;
      }
    }

    for (let i = 0; i < recipeToRender.extendedIngredients.length; i++) {
      if (recipeToRender.extendedIngredients[i].name.toLowerCase().includes(searchValueDesk)) {
        return true;
      }
    }

   });
    console.log(filteredRecipesDesk);
   renderRecipes(filteredRecipesDesk);
   };
}

