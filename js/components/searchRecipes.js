import { renderRecipes } from "./renderRecipes.js";



export function searchRecipes(recipes) {

  const search = document.querySelector(".search");
 
  search.onkeyup = function(event) {
      
  event.preventDefault();
   
   const searchValue = event.target.value.trim().toLowerCase();
   
   const filteredRecipes = recipes.filter(function (searchResults) {
    if (searchResults.title.toLowerCase().includes(searchValue)) {
      return true;            
    }

    // const ingredients = searchResults.extendedIngredients.name;

    // if (ingredients.includes(searchValue)) {
    //   return true;            
    // }
    
    // if (searchResults.extendedIngredients.name.toLowerCase().startsWith(searchValue)) {
    //   return true;            
    // }

    // if (recipeToRender[i].vegetarian.toLowerCase().includes(searchValue)) {
    //   return true;
    // }


   });

   renderRecipes(filteredRecipes);
   };
}

